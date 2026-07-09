(function () {
  'use strict';

  /* ═══════════════════════════════════════
     TRANSLATIONS
  ═══════════════════════════════════════ */
  var T = {

    en: {
      'logo-live': 'Live', 'logo-laugh': 'Laugh', 'logo-love': 'Love',
      'nav-compress':'Compress','nav-resize':'Resize','nav-crop':'Crop',
      'nav-convert':'Convert','nav-rotate':'Rotate','nav-watermark':'Watermark',
      'nav-filters':'Filters','nav-meme':'Meme','nav-ai':'AI Convert',
      'nav-get-started':'Get Started', 'nav-all-tools':'All Tools',

      'hero-badge':'100% private · runs entirely in your browser',
      'hero-h1':'Your images,',
      'hero-words':['transformed.','compressed.','resized.','cropped.','converted.','filtered.','perfected.'],
      'hero-sub':'9 powerful tools — resize, compress, crop, convert, filter & more. No uploads. No account. No limits. Ever.',
      'btn-explore':'Explore All Tools', 'btn-compress-hero':'Compress Image',
      'stat-tools':'Free Tools','stat-uploads':'Server Uploads','stat-private':'Private','stat-images':'Images',

      'tools-eyepill':'All 9 Tools','tools-title':'Pick your tool.',
      'tools-sub':'Drop an image, adjust, download. Done in under 30 seconds — no account needed.',
      'card-open':'Open tool','badge-popular':'Popular','badge-new':'New',

      'tool-compress':'Compress','tool-compress-desc':'Shrink file size without losing visible quality. Live before/after drag preview.',
      'tool-resize':'Resize','tool-resize-desc':'Change dimensions by pixels or percentage. Lock ratio. Quick-scale presets.',
      'tool-crop':'Crop','tool-crop-desc':'Draw a crop box, lock to ratio (16:9, 1:1…), or type exact pixel dimensions.',
      'tool-convert':'Convert','tool-convert-desc':'Switch between JPG, PNG, WebP and GIF instantly with quality control.',
      'tool-rotate':'Rotate & Flip','tool-rotate-desc':'90° / 180° rotation, flip horizontally or vertically, free-angle fine-tune.',
      'tool-watermark':'Watermark','tool-watermark-desc':'Add text anywhere. Control position, opacity, color, size and tile mode.',
      'tool-filters':'Photo Filters','tool-filters-desc':'12 instant presets — Sepia, Noir, Vivid, Dreamy — plus 8 fine-tune sliders.',
      'tool-meme':'Meme Generator','tool-meme-desc':'Bold captions, Impact font, outline toggle. Upload your own or start blank.',
      'tool-ai':'AI Convert','tool-ai-desc':'Turn PNG, JPG, WebP or BMP into an Adobe Illustrator–compatible .ai file.',

      'feat-eyepill':'Why LLL Image','feat-title':'Built different.',
      'feat-sub':'Not just another image tool. Here\'s what makes us stand out.',
      'feat-1-title':'Instant Results','feat-1-desc':'Everything runs on the Canvas API in your browser tab. No upload queue, no processing delay — changes render as you type.',
      'feat-2-title':'Zero Data Risk','feat-2-desc':'Your images never leave your device. There\'s no server involved. It\'s physically impossible for us to see your files.',
      'feat-3-title':'Zero Friction','feat-3-desc':'No account. No signup. No app to install. Drop an image, adjust, download. Three clicks, every time.',
      'feat-4-title':'Actually Free','feat-4-desc':'No paywalls. No watermarks on exports. No "free tier" limits. All 9 tools, all features, all formats — forever.',

      'how-eyepill':'How It Works','how-title':'Three steps to done.','how-sub':'Seriously — it\'s this simple.',
      'step-1-title':'Choose a Tool','step-1-desc':'Pick any tool from the grid above. Each opens instantly — no loading, no waiting.',
      'step-2-title':'Drop Your Image','step-2-desc':'Drag & drop or click to browse. Supports JPG, PNG, WebP, GIF, SVG and more.',
      'step-3-title':'Download','step-3-desc':'Adjust the settings, hit the button, and your processed image downloads instantly.',

      'fmt-eyepill':'Supported Formats','fmt-title':'Everything your browser can handle.',
      'cta-eyepill':'Start Now',
      'cta-h2':'Ready to edit your<br><span class="gtext">first image?</span>',
      'cta-p':'No account needed. Just pick a tool and go.<br>Takes about 10 seconds.',
      'btn-browse':'Browse All Tools','btn-compress-cta':'Compress Now',

      'footer-brand':'Free browser-based image tools. Zero uploads. Zero cost. Your images stay on your device.',
      'footer-optimize':'Optimize','footer-edit':'Edit','footer-about':'About',
      'footer-privacy':'Privacy Policy','footer-terms':'Terms of Use','footer-all':'All Tools',
      'footer-copy':'© 2024 LLL Image · All image processing happens locally in your browser.',

      'upload-h2':'Drop your image here','upload-p':'or click to browse','upload-btn':'Choose File',
    },

    zh: {
      'logo-live': '生活', 'logo-laugh': '欢笑', 'logo-love': '爱',
      'nav-compress':'压缩','nav-resize':'调整大小','nav-crop':'裁剪',
      'nav-convert':'转换','nav-rotate':'旋转','nav-watermark':'水印',
      'nav-filters':'滤镜','nav-meme':'表情包','nav-ai':'AI转换',
      'nav-get-started':'开始使用', 'nav-all-tools':'所有工具',

      'hero-badge':'100% 隐私 · 完全在您的浏览器中运行',
      'hero-h1':'您的图片，',
      'hero-words':['已变换。','已压缩。','已调整。','已裁剪。','已转换。','已滤镜。','已完美。'],
      'hero-sub':'9款强大工具 — 调整大小、压缩、裁剪、转换、滤镜等。无需上传，无需账号，无任何限制。',
      'btn-explore':'探索所有工具', 'btn-compress-hero':'压缩图片',
      'stat-tools':'免费工具','stat-uploads':'服务器上传','stat-private':'完全隐私','stat-images':'处理图片',

      'tools-eyepill':'全部 9 个工具','tools-title':'选择您的工具。',
      'tools-sub':'拖入图片，调整参数，下载。全程不超过30秒，无需账号。',
      'card-open':'打开工具','badge-popular':'热门','badge-new':'新增',

      'tool-compress':'压缩','tool-compress-desc':'大幅缩小文件大小，保持视觉质量。实时前后对比拖动预览。',
      'tool-resize':'调整大小','tool-resize-desc':'按像素或百分比更改尺寸，锁定比例，快速缩放预设。',
      'tool-crop':'裁剪','tool-crop-desc':'绘制裁剪框，锁定比例（16:9、1:1等），或输入精确像素值。',
      'tool-convert':'格式转换','tool-convert-desc':'在JPG、PNG、WebP和GIF之间即时切换，带质量控制。',
      'tool-rotate':'旋转翻转','tool-rotate-desc':'90°/180°旋转，水平或垂直翻转，自由角度微调。',
      'tool-watermark':'添加水印','tool-watermark-desc':'在任意位置添加文字，控制位置、透明度、颜色、大小和平铺。',
      'tool-filters':'照片滤镜','tool-filters-desc':'12种即时预设（复古、黑白、鲜艳、梦幻等）加8个微调滑块。',
      'tool-meme':'表情包生成器','tool-meme-desc':'粗体字幕，Impact字体，轮廓切换。上传图片或使用空白画布。',
      'tool-ai':'AI转换','tool-ai-desc':'将PNG、JPG、WebP或BMP转换为兼容Adobe Illustrator的.ai文件。',

      'feat-eyepill':'为什么选择 LLL Image','feat-title':'与众不同。',
      'feat-sub':'不只是另一个图片工具，这是我们的独特之处。',
      'feat-1-title':'即时结果','feat-1-desc':'一切运行在浏览器的Canvas API上。无上传队列，无处理延迟，输入即生效。',
      'feat-2-title':'零数据风险','feat-2-desc':'您的图片永不离开您的设备。没有服务器参与，我们从物理上无法查看您的文件。',
      'feat-3-title':'零摩擦','feat-3-desc':'无需账号，无需注册，无需安装应用。拖入图片，调整，下载。每次三步完成。',
      'feat-4-title':'真正免费','feat-4-desc':'无付费墙，导出无水印，无"免费版"限制。9个工具，全部功能，所有格式，永久免费。',

      'how-eyepill':'使用方法','how-title':'三步完成。','how-sub':'真的就这么简单。',
      'step-1-title':'选择工具','step-1-desc':'从上方网格中选择任意工具，每个工具即时打开，无需等待。',
      'step-2-title':'拖入图片','step-2-desc':'拖拽或点击浏览。支持JPG、PNG、WebP、GIF、SVG等格式。',
      'step-3-title':'下载','step-3-desc':'调整设置，点击按钮，处理后的图片立即下载。',

      'fmt-eyepill':'支持格式','fmt-title':'浏览器能处理的，我们都支持。',
      'cta-eyepill':'立即开始',
      'cta-h2':'准备好编辑您的<br><span class="gtext">第一张图片了吗？</span>',
      'cta-p':'无需账号，选择工具即可开始。<br>大约只需10秒。',
      'btn-browse':'浏览所有工具','btn-compress-cta':'立即压缩',

      'footer-brand':'免费的浏览器图片工具。零上传，零费用。您的图片保留在您的设备上。',
      'footer-optimize':'优化','footer-edit':'编辑','footer-about':'关于',
      'footer-privacy':'隐私政策','footer-terms':'使用条款','footer-all':'所有工具',
      'footer-copy':'© 2024 LLL Image · 所有图片处理均在您的浏览器本地完成。',

      'upload-h2':'将图片拖到这里','upload-p':'或点击浏览','upload-btn':'选择文件',
    },

    ja: {
      'logo-live': '生きる', 'logo-laugh': '笑う', 'logo-love': '愛する',
      'nav-compress':'圧縮','nav-resize':'リサイズ','nav-crop':'トリミング',
      'nav-convert':'変換','nav-rotate':'回転','nav-watermark':'透かし',
      'nav-filters':'フィルター','nav-meme':'ミーム','nav-ai':'AI変換',
      'nav-get-started':'始める', 'nav-all-tools':'全ツール',

      'hero-badge':'100%プライベート · ブラウザで完全動作',
      'hero-h1':'あなたの画像を',
      'hero-words':['変換しました。','圧縮しました。','リサイズしました。','トリミングしました。','フォーマット変換。','フィルター適用。','完璧にしました。'],
      'hero-sub':'9つの強力なツール — リサイズ、圧縮、トリミング、変換、フィルターなど。アップロード不要。アカウント不要。制限なし。',
      'btn-explore':'すべてのツールを見る', 'btn-compress-hero':'画像を圧縮',
      'stat-tools':'無料ツール','stat-uploads':'サーバー送信','stat-private':'プライベート','stat-images':'処理画像',

      'tools-eyepill':'全 9 ツール','tools-title':'ツールを選択。',
      'tools-sub':'画像をドロップして調整し、ダウンロード。30秒以内に完了 — アカウント不要。',
      'card-open':'ツールを開く','badge-popular':'人気','badge-new':'新機能',

      'tool-compress':'圧縮','tool-compress-desc':'ファイルサイズを大幅削減しながら画質を維持。リアルタイムのビフォーアフタープレビュー。',
      'tool-resize':'リサイズ','tool-resize-desc':'ピクセルまたはパーセントで寸法変更。比率固定、クイックスケールプリセット対応。',
      'tool-crop':'トリミング','tool-crop-desc':'トリミング枠を描画し、比率固定（16:9、1:1等）または正確なピクセル指定。',
      'tool-convert':'変換','tool-convert-desc':'JPG、PNG、WebP、GIF間を即時変換。品質コントロール付き。',
      'tool-rotate':'回転・反転','tool-rotate-desc':'90°/180°回転、水平・垂直反転、自由角度の微調整。',
      'tool-watermark':'透かし追加','tool-watermark-desc':'画像の任意の場所にテキストを追加。位置、透明度、色、サイズ、タイルを制御。',
      'tool-filters':'フォトフィルター','tool-filters-desc':'12種類のインスタントプリセット（セピア、ノワール、鮮やか、夢幻等）と8つのスライダー。',
      'tool-meme':'ミームジェネレーター','tool-meme-desc':'ボールドキャプション、Impactフォント、アウトライン切替。画像アップロードまたは白紙から開始。',
      'tool-ai':'AI変換','tool-ai-desc':'PNG、JPG、WebP、BMPをAdobe Illustrator互換の.aiファイルに変換。',

      'feat-eyepill':'LLL Image の特徴','feat-title':'他とは違う。',
      'feat-sub':'ただの画像ツールではありません。違いをご覧ください。',
      'feat-1-title':'即座に結果','feat-1-desc':'すべてブラウザのCanvas APIで動作。アップロード待ちなし、処理遅延なし — 入力と同時に反映。',
      'feat-2-title':'データリスクゼロ','feat-2-desc':'画像はデバイスから送信されません。サーバー不使用。私たちがファイルを見ることは物理的に不可能です。',
      'feat-3-title':'ストレスゼロ','feat-3-desc':'アカウント不要。登録不要。アプリ不要。画像をドロップして調整してダウンロード。',
      'feat-4-title':'本当に無料','feat-4-desc':'有料プランなし。透かしなし。制限なし。9ツール、全機能、全フォーマット — 永久無料。',

      'how-eyepill':'使い方','how-title':'3ステップで完了。','how-sub':'これだけシンプルです。',
      'step-1-title':'ツールを選ぶ','step-1-desc':'上のグリッドからツールを選択。瞬時に起動 — ロードも待ち時間もありません。',
      'step-2-title':'画像をドロップ','step-2-desc':'ドラッグ&ドロップまたはクリックして参照。JPG、PNG、WebP、GIF、SVGなどに対応。',
      'step-3-title':'ダウンロード','step-3-desc':'設定を調整してボタンをクリック、処理された画像が即座にダウンロードされます。',

      'fmt-eyepill':'対応フォーマット','fmt-title':'ブラウザで扱えるものはすべて対応。',
      'cta-eyepill':'今すぐ開始',
      'cta-h2':'最初の画像を<br><span class="gtext">編集する準備はできましたか？</span>',
      'cta-p':'アカウント不要。ツールを選んですぐ始めましょう。<br>約10秒で完了します。',
      'btn-browse':'すべてのツールを見る','btn-compress-cta':'今すぐ圧縮',

      'footer-brand':'無料のブラウザベース画像ツール。アップロードゼロ。費用ゼロ。画像はデバイスに留まります。',
      'footer-optimize':'最適化','footer-edit':'編集','footer-about':'情報',
      'footer-privacy':'プライバシーポリシー','footer-terms':'利用規約','footer-all':'全ツール',
      'footer-copy':'© 2024 LLL Image · すべての画像処理はブラウザ内でローカルに行われます。',

      'upload-h2':'画像をここにドロップ','upload-p':'またはクリックして参照','upload-btn':'ファイルを選択',
    }
  };

  /* ═══════════════════════════════════════
     CORE
  ═══════════════════════════════════════ */
  var cur = localStorage.getItem('lll-lang') || 'en';

  function t(key) {
    return (T[cur] && T[cur][key] !== undefined ? T[cur][key] : (T.en[key] !== undefined ? T.en[key] : key));
  }

  function applyLang() {
    document.documentElement.lang = cur === 'zh' ? 'zh-CN' : cur === 'ja' ? 'ja' : 'en';

    /* 1. data-i18n text nodes */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if (el.hasAttribute('data-i18n-html')) el.innerHTML = val;
      else el.textContent = val;
    });

    /* 2. Logo words (injected by theme.js) */
    var lw = document.querySelectorAll('.logo-words span');
    var lv = [t('logo-live'), t('logo-laugh'), t('logo-love')];
    lw.forEach(function (s, i) { if (lv[i]) s.textContent = lv[i]; });

    /* 3. Cycling hero words */
    if (window._heroSetWords) window._heroSetWords(t('hero-words'));

    /* 4. Nav links */
    var navLinks = document.querySelectorAll('header nav a');
    var navKeys = ['nav-compress','nav-resize','nav-crop','nav-convert','nav-rotate','nav-watermark','nav-filters','nav-meme','nav-ai'];
    navLinks.forEach(function (a, i) { if (navKeys[i]) a.textContent = t(navKeys[i]); });

    /* 4b. Mobile hamburger menu links (icon + text) */
    var mobileLinks = document.querySelectorAll('.mobile-menu a:not(.mobile-menu-cta)');
    mobileLinks.forEach(function (a, i) {
      if (!navKeys[i]) return;
      var icon = a.querySelector('i');
      a.textContent = ' ' + t(navKeys[i]);
      if (icon) a.insertBefore(icon, a.firstChild);
    });
    var mobileCta = document.querySelector('.mobile-menu .mobile-menu-cta');
    if (mobileCta) {
      var mcKey = document.querySelector('.nav-end a.btn-grad') ? 'nav-get-started' : 'nav-all-tools';
      var mcI = mobileCta.querySelector('i'); mobileCta.textContent = ' ' + t(mcKey); if (mcI) mobileCta.insertBefore(mcI, mobileCta.firstChild);
    }

    /* 5. Get Started button (nav-end) */
    var gsBtn = document.querySelector('.nav-end a.btn-grad');
    if (gsBtn) { var gsI = gsBtn.querySelector('i'); gsBtn.textContent = ' ' + t('nav-get-started'); if (gsI) gsBtn.insertBefore(gsI, gsBtn.firstChild); }

    /* 6. All Tools button (tool pages) */
    var atBtn = document.querySelector('.nav-end a.btn-ghost');
    if (atBtn) { var atI = atBtn.querySelector('i'); atBtn.textContent = ' ' + t('nav-all-tools'); if (atI) atBtn.insertBefore(atI, atBtn.firstChild); }

    /* 7. Common tool-page upload zone */
    var upH2 = document.querySelector('.upload-drop h2');
    if (upH2 && !upH2.hasAttribute('data-i18n')) upH2.textContent = t('upload-h2');
    var upP = document.querySelector('.upload-drop > p:not(.up-note)');
    if (upP && !upP.hasAttribute('data-i18n')) upP.textContent = t('upload-p');
    var upBtn = document.querySelector('.upload-drop .btn-grad');
    if (upBtn) { var ubI = upBtn.querySelector('i'); upBtn.textContent = ' ' + t('upload-btn'); if (ubI) upBtn.insertBefore(ubI, upBtn.firstChild); }

    syncPicker();
  }

  function syncPicker() {
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.classList.toggle('lang-active', b.dataset.lang === cur);
    });
  }

  function setLang(lang) {
    cur = lang;
    localStorage.setItem('lll-lang', lang);
    applyLang();
  }

  /* ═══════════════════════════════════════
     INJECT PICKER INTO NAV
  ═══════════════════════════════════════ */
  document.addEventListener('DOMContentLoaded', function () {
    var navEnd = document.querySelector('.nav-end');
    if (!navEnd) return;

    var picker = document.createElement('div');
    picker.className = 'lang-picker';
    ['en','zh','ja'].forEach(function (code) {
      var label = code === 'en' ? 'EN' : code === 'zh' ? '中' : '日';
      var btn = document.createElement('button');
      btn.className = 'lang-btn';
      btn.dataset.lang = code;
      btn.textContent = label;
      btn.title = code === 'en' ? 'English' : code === 'zh' ? '中文' : '日本語';
      btn.onclick = function () { setLang(code); };
      picker.appendChild(btn);
    });

    navEnd.insertBefore(picker, navEnd.firstChild);

    /* also inject a copy into the mobile hamburger menu, if present,
       since the header picker is hidden on very small screens */
    var mobileSlot = document.getElementById('mobileLangPicker');
    if (mobileSlot) {
      ['en','zh','ja'].forEach(function (code) {
        var label = code === 'en' ? 'EN' : code === 'zh' ? '中' : '日';
        var btn = document.createElement('button');
        btn.className = 'lang-btn';
        btn.dataset.lang = code;
        btn.textContent = label;
        btn.title = code === 'en' ? 'English' : code === 'zh' ? '中文' : '日本語';
        btn.onclick = function () { setLang(code); };
        mobileSlot.appendChild(btn);
      });
    }

    applyLang();
  });

  window.LLLLang = { set: setLang, t: t };
})();
