import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
// Set JSDOM_MODULE to an installed jsdom module when running without local dependencies.
const {JSDOM} = await import(process.env.JSDOM_MODULE || 'jsdom');
const source = readFileSync(new URL('../assets/js/lang.js', import.meta.url), 'utf8');
function page(script = source) {
  const dom = new JSDOM('<div class="nav-end"></div><h2 data-i18n="cta-h2" data-i18n-html></h2><p data-i18n="cta-p" data-i18n-html></p><div class="mobile-menu"><a><i class="fa fa-image"></i>Compress</a></div>', {url:'https://example.test/', runScripts:'outside-only'});
  dom.window.eval(script);
  return dom;
}
test('unknown DOM translation keys remain text even when rich rendering is requested', () => {
  const dom=page(), {document, LLLLang}=dom.window;
  const el=document.createElement('div'), payload='<img src=x onerror="window.pwned=1">';
  el.setAttribute('data-i18n', payload); el.setAttribute('data-i18n-html',''); document.body.append(el);
  LLLLang.set('en');
  assert.equal(el.querySelector('img'),null);
  assert.equal(el.textContent,payload);
  assert.equal(dom.window.pwned,undefined);
  dom.window.close();
});
test('rich translations preserve line breaks, gradient emphasis and mobile icons in all languages', () => {
  const dom=page(), {document, LLLLang}=dom.window;
  for(const lang of ['en','zh','ja']) {
    LLLLang.set(lang);
    assert.equal(document.querySelector('h2 br')?.tagName,'BR');
    assert.equal(document.querySelector('h2 span')?.className,'gtext');
    assert.ok(document.querySelector('h2 span').textContent.length>0);
    assert.equal(document.querySelector('p br')?.tagName,'BR');
    assert.equal(document.querySelector('.mobile-menu i')?.className,'fa fa-image');
  }
  dom.window.close();
});
test('all seven batch image tools pin JSZip with SHA512 integrity and anonymous CORS', () => {
  for(const name of ['compress','resize','convert','rotate','watermark','filters','meme']) {
    const html=readFileSync(new URL('../'+name+'.html',import.meta.url),'utf8');
    const tag=html.match(/<script[^>]+src="https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/jszip\/3\.10\.1\/jszip.min.js"[^>]*>/)?.[0];
    assert.ok(tag,name+' retains JSZip');
    assert.match(tag,/integrity="sha512-[A-Za-z0-9+/]+=*"/,name+' enforces integrity');
    assert.match(tag,/crossorigin="anonymous"/,name+' enables cross-origin SRI');
  }
});

test('unexpected markup in an authored rich translation remains inert text', () => {
  const dom=page(source.replace('Ready to edit your<br><span class="gtext">first image?</span>', '<img src=x onerror="window.pwned=1"><br><span class="gtext">safe</span>'));
  dom.window.LLLLang.set('en');
  const el=dom.window.document.querySelector('h2');
  assert.equal(el.querySelector('img'),null);
  assert.ok(el.textContent.includes('<img src=x onerror="window.pwned=1">'));
  assert.equal(el.querySelector('span').className,'gtext');
  assert.equal(dom.window.pwned,undefined);dom.window.close();
});
