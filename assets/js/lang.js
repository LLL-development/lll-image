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
      'hero-scroll':'Scroll',
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
      'footer-copy':'© 2026 LLL Image · All image processing happens locally in your browser.',
      'footer-link-compress':'Compress Image','footer-link-resize':'Resize Image','footer-link-convert':'Convert Format',
      'footer-link-crop':'Crop Image','footer-link-rotate':'Rotate & Flip','footer-link-watermark':'Add Watermark','footer-link-filters':'Photo Filters','footer-link-meme':'Meme Generator',
      'footer-nav-tools':'Tools','footer-nav-more':'More',
      'footer-brand-tool-short':'Free browser-based image tools.','footer-brand-tool-uploads':'Free browser-based image tools. Zero uploads.',

      'upload-h2':'Drop your image here','upload-p':'or click to browse','upload-btn':'Choose File',
      'common-download-btn':'Download','q-failed-load':'Failed to load',
      'theme-light':'Light','theme-dark':'Dark',
      'q-remove-title':'Remove','watermark-custom-color-title':'Custom color',
      'q-strip-count':'{n} images','q-strip-processed':'{n} images processed','q-card-save':'Save','q-download-zip':'Download All (.zip)',
      'compress-toast-batch-done':'{n} images compressed!',
      'resize-toast-batch-done':'{n} images resized!',
      'convert-toast-batch-done':'{n} images converted!','convert-strip-processed':'{n} images converted to {f}',
      'rotate-toast-batch-done':'{n} images saved!',
      'watermark-toast-batch-done':'{n} images watermarked!',
      'filters-toast-batch-done':'{n} images filtered!','filters-strip-processed':'{n} images filtered with "{p}"',
      'meme-toast-batch-done':'{n} memes created!','meme-strip-processed':'{n} memes saved as {f}',

      /* AI Convert page */
      'ai-h1':'Convert to AI',
      'ai-hero-p':'Turn PNG, JPG, WebP or BMP images into Adobe Illustrator–compatible .ai files — right in your browser, no Illustrator required. Select multiple files to batch-convert.',
      'ai-upload-h2':'Drop your images here','ai-upload-p':'or click to browse — select one or many','ai-upload-btn':'Choose Files',
      'ai-queue':'Queue','ai-add-images':'Add Images',
      'ai-opts-head':'AI Export Options',
      'ai-opt-output':'Output','ai-opt-output-desc':'PDF-compatible · opens directly in Adobe Illustrator',
      'ai-opt-quality':'Embed Quality','ai-range-lo':'Smaller file','ai-range-hi':'Better quality',
      'ai-opt-bg':'Background Color','ai-opt-bg-desc':'Applied to every image when flattening transparent layers',
      'ai-how-label':'How it works:',
      'ai-how-desc':'Each image is embedded as a placed raster inside a real, valid vector-format .ai file — no Adobe account, license or server needed. Convert several at once and you\'ll get a single .zip of .ai files. Once open in Illustrator, use <em>Object → Image Trace</em> if you want true editable vector paths.',
      'ai-dl-h3':'AI File Ready!','ai-dl-btn':'Convert Another',
      'ai-loading':'Loading…','ai-convert-btn':'Convert to AI','ai-converting':'Converting','ai-add-more':'Add more',

      /* Compress page */
      'compress-h1':'Compress Image',
      'compress-hero-p':'Reduce file size while preserving quality. Drag the slider to compare before and after.',
      'compress-upload-note':'JPG · PNG · WebP · Best results with JPEG photos · select multiple to batch compress',
      'compress-panel-h3':'Preview','compress-panel-h3-compare':'Before / After Compare','compress-change-btn':'Change',
      'compress-opts-head':'Compression Options',
      'compress-opt-quality':'Quality','compress-range-lo':'🗜 Smallest','compress-range-hi':'✨ Best Quality',
      'compress-opt-presets':'Presets','compress-preset-max':'Max Compress','compress-preset-balanced':'Balanced','compress-preset-high':'High Quality','compress-preset-near':'Near Lossless',
      'compress-opt-format':'Output Format','compress-fmt-auto':'Auto-detect (recommended)','compress-fmt-jpeg':'Force JPEG','compress-fmt-webp':'Force WebP (best ratio)','compress-fmt-png':'Force PNG (lossless)',
      'compress-opt-maxdim':'Max Dimensions (optional)','compress-note-width':'Width px','compress-note-height':'Height px',
      'compress-sz-original':'Original','compress-sz-compressed':'Compressed',
      'compress-dl-h3':'Compression Done!','compress-dl-btn':'Compress Another','compress-drag-compare':'Drag to compare',
      'compress-ph-maxw':'Max width','compress-ph-maxh':'Max height',
      'compress-toast-saved-pct':'Saved {p}% file size!','compress-toast-saved-generic':'File size optimized!',
      'compress-mode-single':'Single Image','compress-mode-batch':'Batch — Target Size',
      'compress-batch-upload-h2':'Drop your images here','compress-batch-upload-p':'or click to browse — select multiple','compress-batch-upload-btn':'Choose Files',
      'compress-batch-upload-note':'JPG · PNG · WebP — compress many at once to a target size',
      'compress-batch-queue':'Queue','compress-batch-add-images':'Add Images',
      'compress-batch-opts-head':'Target Size Options','compress-batch-opt-target':'Target Size','compress-batch-custom-ph':'Custom',
      'compress-batch-opt-format':'Output Format','compress-batch-fmt-auto':'Auto (JPEG or WebP)',
      'compress-batch-note-label':'How it works:','compress-batch-note-desc':'Each image\'s quality is reduced until it fits your target size. If it still doesn\'t fit at the lowest quality, dimensions are scaled down and it tries again.',
      'compress-batch-btn':'Compress All to Target Size',
      'compress-batch-dl-h3':'Batch Compression Done!','compress-batch-dl-btn':'Compress Another Batch',
      'compress-batch-achieved':'under target','compress-batch-not-achieved':'couldn\'t fully reach target — smallest possible size shown',
      'compress-batch-images-compressed':'{n} images compressed · 1 ZIP file','compress-batch-some-not-achieved':'some images couldn\'t fully reach target size',
      'compress-batch-toast':'Batch compression complete','compress-batch-toast-rejected':'Skipped {n} unsupported file(s)',

      /* Resize page */
      'resize-h1':'Resize Image',
      'resize-hero-p':'Change dimensions by pixels or percentage. Lock aspect ratio. Live output preview.',
      'resize-upload-p':'or click anywhere to browse files','resize-upload-note':'JPG · PNG · WebP · GIF · SVG · Max any size',
      'resize-panel-h3':'Preview','resize-change-btn':'Change',
      'resize-opts-head':'Resize Options',
      'resize-opt-mode':'Mode','resize-mode-px':'By Pixels','resize-mode-pct':'By Percent',
      'resize-opt-target':'Target Dimensions','resize-note-width':'Width px','resize-note-height':'Height px',
      'resize-opt-quickscale':'Quick Scale','resize-scale-original':'Original',
      'resize-opt-scalefactor':'Scale Factor',
      'resize-output-label':'Output:',
      'resize-opt-constraints':'Constraints','resize-lock-ratio':'Lock aspect ratio','resize-prevent-upscale':'Prevent upscaling',
      'resize-opt-format':'Output Format','resize-fmt-original':'Same as original',
      'resize-dl-h3':'Image Resized!','resize-dl-btn':'Resize Another',
      'resize-ph-width':'Width','resize-ph-height':'Height',
      'resize-toast':'Resized to {w} × {h} px',

      /* Crop page */
      'crop-h1':'Crop Image',
      'crop-hero-p':'Click and drag on your image to select a crop area. Lock to aspect ratio presets or enter exact pixels.',
      'crop-upload-note':'JPG · PNG · WebP · GIF',
      'crop-panel-h3':'Draw Crop Area','crop-clear-btn':'Clear','crop-no-selection':'No selection',
      'crop-opts-head':'Crop Options',
      'crop-opt-aspect':'Aspect Ratio','crop-asp-free':'Free',
      'crop-opt-manual':'Manual Coordinates (px)','crop-note-left':'Left (X)','crop-note-top':'Top (Y)','crop-note-width':'Width','crop-note-height':'Height',
      'crop-opt-format':'Output Format','crop-fmt-original':'Same as original','crop-fmt-png':'PNG (preserves transparency)',
      'crop-info-note':'Click and drag on the image to draw your crop area. Use presets above to lock the ratio.',
      'crop-dl-h3':'Image Cropped!','crop-dl-btn':'Crop Another','crop-dl-info-prefix':'Cropped to','crop-toast-none':'Draw a crop area first!',
      'crop-toast-applied':'Crop applied!',

      /* Convert page */
      'convert-h1':'Convert Image',
      'convert-hero-p':'Switch your image between JPG, PNG, WebP, and GIF formats instantly — right in your browser.',
      'convert-upload-note':'JPG · PNG · WebP · GIF · BMP · SVG',
      'convert-panel-h3':'Preview','convert-change-btn':'Change',
      'convert-opts-head':'Convert Options',
      'convert-opt-convertto':'Convert To',
      'convert-fmt-jpg-desc':'Photos · Small file size','convert-fmt-png-desc':'Lossless · Transparency','convert-fmt-webp-desc':'Modern · Best compression','convert-fmt-gif-desc':'Animation · 256 colors',
      'convert-opt-quality':'Quality (JPG / WebP)','convert-range-lo':'Smaller file','convert-range-hi':'Better quality',
      'convert-opt-bg':'Background Color','convert-opt-bg-desc':'Applied when converting transparent PNG → JPG',
      'convert-tip-label':'Tip:','convert-tip-desc':'WebP gives 25–35% smaller files than JPEG at the same visual quality — ideal for web use.',
      'convert-dl-h3':'Conversion Complete!','convert-dl-btn':'Convert Another',
      'convert-toast':'Converted to {f}',

      /* Rotate page */
      'rotate-h1':'Rotate & Flip',
      'rotate-hero-p':'Rotate 90°/180°, flip horizontally or vertically, or fine-tune with a free-angle slider. Live preview.',
      'rotate-upload-note':'JPG · PNG · WebP · GIF',
      'rotate-panel-h3':'Live Preview','rotate-change-btn':'Change','rotate-no-flip':'No flip',
      'rotate-opts-head':'Transform Options',
      'rotate-opt-rotate':'Rotate','rotate-rot-left':'90° Left','rotate-rot-right':'90° Right','rotate-reset-all':'Reset All',
      'rotate-opt-flip':'Flip','rotate-flip-h':'Flip H','rotate-flip-v':'Flip V',
      'rotate-opt-fineangle':'Fine Angle',
      'rotate-opt-canvasbg':'Canvas Background','rotate-bg-transparent':'Transparent (PNG output)','rotate-bg-color':'Use color picker',
      'rotate-opt-format':'Output Format','rotate-fmt-original':'Same as original',
      'rotate-btn':'Save Image','rotate-dl-h3':'Image Ready!','rotate-dl-btn':'Start Over','rotate-toast-saved':'Image saved!',

      /* Watermark page */
      'watermark-h1':'Watermark Image',
      'watermark-hero-p':'Add custom text to protect your images. Control position, size, color, opacity — all live.',
      'watermark-upload-note':'JPG · PNG · WebP',
      'watermark-panel-h3':'Live Preview','watermark-change-btn':'Change',
      'watermark-opts-head':'Watermark Options',
      'watermark-opt-text':'Watermark Text',
      'watermark-opt-position':'Position','watermark-pos-top':'Top','watermark-pos-center':'Center','watermark-pos-bottom':'Bottom',
      'watermark-opt-fontsize':'Font Size','watermark-range-tiny':'Tiny','watermark-range-huge':'Huge',
      'watermark-opt-opacity':'Opacity','watermark-range-invisible':'Invisible','watermark-range-solid':'Solid',
      'watermark-opt-color':'Color',
      'watermark-opt-tile':'Repeat / Tile','watermark-toggle-tile':'Tile watermark across entire image',
      'watermark-btn':'Save Watermarked Image','watermark-dl-h3':'Watermark Applied!','watermark-dl-btn':'Watermark Another',
      'watermark-dl-info-prefix':'Watermark added to','watermark-dl-info-suffix':'image',
      'watermark-ph-text':'Your text…','watermark-toast-applied':'Watermark applied!',

      /* Filters page */
      'filters-h1':'Photo Filters',
      'filters-hero-p':'12 instant presets plus 8 fine-tune sliders. All live — see every change in real time.',
      'filters-upload-h2':'Drop a photo here','filters-upload-note':'JPG · PNG · WebP',
      'filters-panel-h3':'Live Preview','filters-reset-btn':'Reset','filters-change-btn':'Change',
      'filters-opts-head':'Presets & Adjustments',
      'filters-opt-presets':'Filter Presets','filters-opt-adjustments':'Fine Adjustments',
      'filters-adj-brightness':'Brightness','filters-adj-contrast':'Contrast','filters-adj-saturation':'Saturation','filters-adj-hue':'Hue Rotate','filters-adj-blur':'Blur','filters-adj-invert':'Invert','filters-adj-sepia':'Sepia','filters-adj-grayscale':'Grayscale',
      'filters-btn':'Save Filtered Image','filters-dl-h3':'Filter Saved!','filters-dl-btn':'Filter Another',
      'filters-dl-info-applied':'applied','filters-toast-saved':'saved!',
      'filters-preset-original':'Original','filters-preset-grayscale':'Grayscale','filters-preset-sepia':'Sepia','filters-preset-vintage':'Vintage','filters-preset-vivid':'Vivid','filters-preset-cool':'Cool','filters-preset-warm':'Warm','filters-preset-noir':'Noir','filters-preset-faded':'Faded','filters-preset-invert':'Invert','filters-preset-dreamy':'Dreamy','filters-preset-punch':'Punch',

      /* Meme page */
      'meme-h1':'Meme Generator',
      'meme-hero-p':'Add bold captions to any image. Upload your own or start from a blank canvas.',
      'meme-upload-h2':'Choose a Starting Image','meme-upload-p':'Upload your own or pick a blank template below',
      'meme-upload-btn':'Upload Image','meme-blank-btn':'Blank Canvas','meme-upload-note':'JPG · PNG · WebP · or use a blank template',
      'meme-panel-h3':'Meme Preview','meme-change-btn':'Change Image',
      'meme-opts-head':'Caption Options',
      'meme-opt-top':'Top Caption','meme-opt-bottom':'Bottom Caption','meme-opt-font':'Font','meme-opt-fontsize':'Font Size',
      'meme-opt-textcolor':'Text Color',
      'meme-opt-textstyle':'Text Style','meme-toggle-outline':'Black outline (classic meme style)','meme-toggle-shadow':'Drop shadow','meme-toggle-caps':'ALL CAPS',
      'meme-opt-padding':'Vertical Padding',
      'meme-btn-png':'Download PNG','meme-btn-jpg':'Download JPG',
      'meme-dl-h3':'Meme Ready!','meme-dl-btn':'Make Another','meme-dl-info-suffix':'go share it!','meme-toast-saved-as':'Meme saved as','meme-blank-dims-suffix':'blank',
      'meme-ph-top':'TOP TEXT','meme-ph-bottom':'BOTTOM TEXT',
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
      'hero-scroll':'向下滚动',
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
      'footer-copy':'© 2026 LLL Image · 所有图片处理均在您的浏览器本地完成。',
      'footer-link-compress':'压缩图片','footer-link-resize':'调整图片大小','footer-link-convert':'转换格式',
      'footer-link-crop':'裁剪图片','footer-link-rotate':'旋转与翻转','footer-link-watermark':'添加水印','footer-link-filters':'照片滤镜','footer-link-meme':'表情包生成器',
      'footer-nav-tools':'工具','footer-nav-more':'更多',
      'footer-brand-tool-short':'免费的浏览器图片工具。','footer-brand-tool-uploads':'免费的浏览器图片工具。零上传。',

      'upload-h2':'将图片拖到这里','upload-p':'或点击浏览','upload-btn':'选择文件',
      'common-download-btn':'下载','q-failed-load':'加载失败',
      'theme-light':'浅色','theme-dark':'深色',
      'q-remove-title':'移除','watermark-custom-color-title':'自定义颜色',
      'q-strip-count':'{n} 张图片','q-strip-processed':'已处理 {n} 张图片','q-card-save':'保存','q-download-zip':'下载全部（.zip）',
      'compress-toast-batch-done':'已压缩 {n} 张图片！',
      'resize-toast-batch-done':'已调整 {n} 张图片大小！',
      'convert-toast-batch-done':'已转换 {n} 张图片！','convert-strip-processed':'已将 {n} 张图片转换为 {f}',
      'rotate-toast-batch-done':'已保存 {n} 张图片！',
      'watermark-toast-batch-done':'已为 {n} 张图片添加水印！',
      'filters-toast-batch-done':'已为 {n} 张图片应用滤镜！','filters-strip-processed':'已用"{p}"滤镜处理 {n} 张图片',
      'meme-toast-batch-done':'已生成 {n} 个表情包！','meme-strip-processed':'已将 {n} 个表情包保存为 {f}',

      /* AI 转换页面 */
      'ai-h1':'转换为AI格式',
      'ai-hero-p':'将PNG、JPG、WebP或BMP图片转换为兼容Adobe Illustrator的.ai文件——完全在浏览器中运行，无需安装Illustrator。可选择多个文件进行批量转换。',
      'ai-upload-h2':'将图片拖到这里','ai-upload-p':'或点击浏览——可选择一个或多个文件','ai-upload-btn':'选择文件',
      'ai-queue':'队列','ai-add-images':'添加图片',
      'ai-opts-head':'AI导出选项',
      'ai-opt-output':'输出格式','ai-opt-output-desc':'兼容PDF格式 · 可直接在Adobe Illustrator中打开',
      'ai-opt-quality':'嵌入质量','ai-range-lo':'文件更小','ai-range-hi':'质量更好',
      'ai-opt-bg':'背景颜色','ai-opt-bg-desc':'在展平透明图层时应用于每张图片',
      'ai-how-label':'工作原理：',
      'ai-how-desc':'每张图片都会作为置入的位图嵌入到一个真实、有效的矢量格式.ai文件中——无需Adobe账号、许可证或服务器。一次转换多张图片后，你将获得一个包含所有.ai文件的.zip压缩包。在Illustrator中打开后，如果需要真正可编辑的矢量路径，请使用<em>对象 → 图像描摹</em>。',
      'ai-dl-h3':'AI文件已生成！','ai-dl-btn':'继续转换',
      'ai-loading':'加载中…','ai-convert-btn':'转换为AI','ai-converting':'正在转换','ai-add-more':'添加更多',

      /* 压缩页面 */
      'compress-h1':'压缩图片',
      'compress-hero-p':'在保持画质的同时减小文件体积。拖动滑块对比压缩前后效果。',
      'compress-upload-note':'JPG · PNG · WebP · JPEG照片效果最佳 · 可选择多个文件批量压缩',
      'compress-panel-h3':'预览','compress-panel-h3-compare':'压缩前 / 后对比','compress-change-btn':'更换',
      'compress-opts-head':'压缩选项',
      'compress-opt-quality':'质量','compress-range-lo':'🗜 体积最小','compress-range-hi':'✨ 质量最佳',
      'compress-opt-presets':'预设','compress-preset-max':'最大压缩','compress-preset-balanced':'平衡','compress-preset-high':'高质量','compress-preset-near':'近乎无损',
      'compress-opt-format':'输出格式','compress-fmt-auto':'自动检测（推荐）','compress-fmt-jpeg':'强制JPEG','compress-fmt-webp':'强制WebP（压缩比最佳）','compress-fmt-png':'强制PNG（无损）',
      'compress-opt-maxdim':'最大尺寸（可选）','compress-note-width':'宽度 px','compress-note-height':'高度 px',
      'compress-sz-original':'原始','compress-sz-compressed':'压缩后',
      'compress-dl-h3':'压缩完成！','compress-dl-btn':'继续压缩','compress-drag-compare':'拖动对比',
      'compress-ph-maxw':'最大宽度','compress-ph-maxh':'最大高度',
      'compress-toast-saved-pct':'已减小 {p}% 文件体积！','compress-toast-saved-generic':'文件已优化！',
      'compress-mode-single':'单张图片','compress-mode-batch':'批量 — 目标大小',
      'compress-batch-upload-h2':'将图片拖到这里','compress-batch-upload-p':'或点击浏览——可选择多个文件','compress-batch-upload-btn':'选择文件',
      'compress-batch-upload-note':'JPG · PNG · WebP — 一次性压缩到指定目标大小',
      'compress-batch-queue':'队列','compress-batch-add-images':'添加图片',
      'compress-batch-opts-head':'目标大小选项','compress-batch-opt-target':'目标大小','compress-batch-custom-ph':'自定义',
      'compress-batch-opt-format':'输出格式','compress-batch-fmt-auto':'自动（JPEG或WebP）',
      'compress-batch-note-label':'工作原理：','compress-batch-note-desc':'每张图片的质量会逐步降低，直到文件大小符合目标。如果在最低质量下仍无法达到目标，将缩小图片尺寸后重试。',
      'compress-batch-btn':'批量压缩至目标大小',
      'compress-batch-dl-h3':'批量压缩完成！','compress-batch-dl-btn':'继续批量压缩',
      'compress-batch-achieved':'已达到目标','compress-batch-not-achieved':'未能完全达到目标——已显示可达到的最小体积',
      'compress-batch-images-compressed':'已压缩 {n} 张图片 · 1 个ZIP文件','compress-batch-some-not-achieved':'部分图片未能完全达到目标大小',
      'compress-batch-toast':'批量压缩完成','compress-batch-toast-rejected':'已跳过 {n} 个不支持的文件',

      /* 调整大小页面 */
      'resize-h1':'调整图片大小',
      'resize-hero-p':'按像素或百分比更改尺寸，锁定宽高比，实时预览输出效果。',
      'resize-upload-p':'或点击任意位置浏览文件','resize-upload-note':'JPG · PNG · WebP · GIF · SVG · 不限尺寸大小',
      'resize-panel-h3':'预览','resize-change-btn':'更换',
      'resize-opts-head':'调整大小选项',
      'resize-opt-mode':'模式','resize-mode-px':'按像素','resize-mode-pct':'按百分比',
      'resize-opt-target':'目标尺寸','resize-note-width':'宽度 px','resize-note-height':'高度 px',
      'resize-opt-quickscale':'快速缩放','resize-scale-original':'原始尺寸',
      'resize-opt-scalefactor':'缩放比例',
      'resize-output-label':'输出：',
      'resize-opt-constraints':'限制条件','resize-lock-ratio':'锁定宽高比','resize-prevent-upscale':'禁止放大',
      'resize-opt-format':'输出格式','resize-fmt-original':'与原图相同',
      'resize-dl-h3':'图片已调整大小！','resize-dl-btn':'继续调整',
      'resize-ph-width':'宽度','resize-ph-height':'高度',
      'resize-toast':'已调整为 {w} × {h} px',

      /* 裁剪页面 */
      'crop-h1':'裁剪图片',
      'crop-hero-p':'在图片上点击并拖动以选择裁剪区域。锁定预设比例或输入精确像素值。',
      'crop-upload-note':'JPG · PNG · WebP · GIF',
      'crop-panel-h3':'绘制裁剪区域','crop-clear-btn':'清除','crop-no-selection':'未选择区域',
      'crop-opts-head':'裁剪选项',
      'crop-opt-aspect':'宽高比','crop-asp-free':'自由',
      'crop-opt-manual':'手动坐标（像素）','crop-note-left':'左（X）','crop-note-top':'上（Y）','crop-note-width':'宽度','crop-note-height':'高度',
      'crop-opt-format':'输出格式','crop-fmt-original':'与原图相同','crop-fmt-png':'PNG（保留透明度）',
      'crop-info-note':'在图片上点击并拖动以绘制裁剪区域。使用上方预设可锁定比例。',
      'crop-dl-h3':'图片已裁剪！','crop-dl-btn':'继续裁剪','crop-dl-info-prefix':'已裁剪为','crop-toast-none':'请先绘制裁剪区域！',
      'crop-toast-applied':'已裁剪！',

      /* 格式转换页面 */
      'convert-h1':'转换图片格式',
      'convert-hero-p':'在浏览器中即时切换JPG、PNG、WebP和GIF格式。',
      'convert-upload-note':'JPG · PNG · WebP · GIF · BMP · SVG',
      'convert-panel-h3':'预览','convert-change-btn':'更换',
      'convert-opts-head':'转换选项',
      'convert-opt-convertto':'转换为',
      'convert-fmt-jpg-desc':'照片 · 文件小','convert-fmt-png-desc':'无损 · 支持透明','convert-fmt-webp-desc':'现代格式 · 压缩率最佳','convert-fmt-gif-desc':'动画 · 256色',
      'convert-opt-quality':'质量（JPG / WebP）','convert-range-lo':'文件更小','convert-range-hi':'质量更好',
      'convert-opt-bg':'背景颜色','convert-opt-bg-desc':'转换透明PNG为JPG时应用',
      'convert-tip-label':'提示：','convert-tip-desc':'在相同视觉质量下，WebP文件比JPEG小25–35%——非常适合网页使用。',
      'convert-dl-h3':'转换完成！','convert-dl-btn':'继续转换',
      'convert-toast':'已转换为 {f}',

      /* 旋转页面 */
      'rotate-h1':'旋转与翻转',
      'rotate-hero-p':'旋转90°/180°，水平或垂直翻转，或使用自由角度滑块微调。实时预览。',
      'rotate-upload-note':'JPG · PNG · WebP · GIF',
      'rotate-panel-h3':'实时预览','rotate-change-btn':'更换','rotate-no-flip':'未翻转',
      'rotate-opts-head':'变换选项',
      'rotate-opt-rotate':'旋转','rotate-rot-left':'左转90°','rotate-rot-right':'右转90°','rotate-reset-all':'全部重置',
      'rotate-opt-flip':'翻转','rotate-flip-h':'水平翻转','rotate-flip-v':'垂直翻转',
      'rotate-opt-fineangle':'精细角度',
      'rotate-opt-canvasbg':'画布背景','rotate-bg-transparent':'透明（PNG输出）','rotate-bg-color':'使用取色器',
      'rotate-opt-format':'输出格式','rotate-fmt-original':'与原图相同',
      'rotate-btn':'保存图片','rotate-dl-h3':'图片已就绪！','rotate-dl-btn':'重新开始','rotate-toast-saved':'图片已保存！',

      /* 水印页面 */
      'watermark-h1':'添加水印',
      'watermark-hero-p':'添加自定义文字保护您的图片，实时控制位置、大小、颜色、透明度。',
      'watermark-upload-note':'JPG · PNG · WebP',
      'watermark-panel-h3':'实时预览','watermark-change-btn':'更换',
      'watermark-opts-head':'水印选项',
      'watermark-opt-text':'水印文字',
      'watermark-opt-position':'位置','watermark-pos-top':'上','watermark-pos-center':'居中','watermark-pos-bottom':'下',
      'watermark-opt-fontsize':'字体大小','watermark-range-tiny':'极小','watermark-range-huge':'超大',
      'watermark-opt-opacity':'透明度','watermark-range-invisible':'几乎透明','watermark-range-solid':'完全不透明',
      'watermark-opt-color':'颜色',
      'watermark-opt-tile':'重复/平铺','watermark-toggle-tile':'在整张图片上平铺水印',
      'watermark-btn':'保存水印图片','watermark-dl-h3':'水印已添加！','watermark-dl-btn':'继续添加水印',
      'watermark-dl-info-prefix':'已为','watermark-dl-info-suffix':'图片添加水印',
      'watermark-ph-text':'输入文字…','watermark-toast-applied':'水印已添加！',

      /* 滤镜页面 */
      'filters-h1':'照片滤镜',
      'filters-hero-p':'12种即时预设，另有8个精细调节滑块。全部实时生效——即时查看每处改动。',
      'filters-upload-h2':'将照片拖到这里','filters-upload-note':'JPG · PNG · WebP',
      'filters-panel-h3':'实时预览','filters-reset-btn':'重置','filters-change-btn':'更换',
      'filters-opts-head':'预设与调节',
      'filters-opt-presets':'滤镜预设','filters-opt-adjustments':'精细调节',
      'filters-adj-brightness':'亮度','filters-adj-contrast':'对比度','filters-adj-saturation':'饱和度','filters-adj-hue':'色相旋转','filters-adj-blur':'模糊','filters-adj-invert':'反色','filters-adj-sepia':'复古棕褐','filters-adj-grayscale':'灰度',
      'filters-btn':'保存滤镜图片','filters-dl-h3':'滤镜已保存！','filters-dl-btn':'继续应用滤镜',
      'filters-dl-info-applied':'已应用','filters-toast-saved':'已保存！',
      'filters-preset-original':'原图','filters-preset-grayscale':'灰度','filters-preset-sepia':'复古棕褐','filters-preset-vintage':'复古','filters-preset-vivid':'鲜艳','filters-preset-cool':'冷色调','filters-preset-warm':'暖色调','filters-preset-noir':'黑色电影','filters-preset-faded':'褪色','filters-preset-invert':'反色','filters-preset-dreamy':'梦幻','filters-preset-punch':'强烈',

      /* 表情包页面 */
      'meme-h1':'表情包生成器',
      'meme-hero-p':'为任意图片添加醒目字幕。上传自己的图片，或从空白画布开始。',
      'meme-upload-h2':'选择起始图片','meme-upload-p':'上传您自己的图片，或在下方选择空白模板',
      'meme-upload-btn':'上传图片','meme-blank-btn':'空白画布','meme-upload-note':'JPG · PNG · WebP · 或使用空白模板',
      'meme-panel-h3':'表情包预览','meme-change-btn':'更换图片',
      'meme-opts-head':'字幕选项',
      'meme-opt-top':'顶部字幕','meme-opt-bottom':'底部字幕','meme-opt-font':'字体','meme-opt-fontsize':'字体大小',
      'meme-opt-textcolor':'文字颜色',
      'meme-opt-textstyle':'文字样式','meme-toggle-outline':'黑色描边（经典表情包风格）','meme-toggle-shadow':'投影','meme-toggle-caps':'全部大写',
      'meme-opt-padding':'垂直边距',
      'meme-btn-png':'下载PNG','meme-btn-jpg':'下载JPG',
      'meme-dl-h3':'表情包已生成！','meme-dl-btn':'再做一个','meme-dl-info-suffix':'快去分享吧！','meme-toast-saved-as':'表情包已保存为','meme-blank-dims-suffix':'空白',
      'meme-ph-top':'顶部文字','meme-ph-bottom':'底部文字',
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
      'hero-scroll':'スクロール',
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
      'footer-copy':'© 2026 LLL Image · すべての画像処理はブラウザ内でローカルに行われます。',
      'footer-link-compress':'画像を圧縮','footer-link-resize':'画像をリサイズ','footer-link-convert':'形式を変換',
      'footer-link-crop':'画像をトリミング','footer-link-rotate':'回転・反転','footer-link-watermark':'透かしを追加','footer-link-filters':'フォトフィルター','footer-link-meme':'ミームジェネレーター',
      'footer-nav-tools':'ツール','footer-nav-more':'その他',
      'footer-brand-tool-short':'無料のブラウザベース画像ツール。','footer-brand-tool-uploads':'無料のブラウザベース画像ツール。アップロード不要。',

      'upload-h2':'画像をここにドロップ','upload-p':'またはクリックして参照','upload-btn':'ファイルを選択',
      'common-download-btn':'ダウンロード','q-failed-load':'読み込み失敗',
      'theme-light':'ライト','theme-dark':'ダーク',
      'q-remove-title':'削除','watermark-custom-color-title':'カスタムカラー',
      'q-strip-count':'{n}枚の画像','q-strip-processed':'{n}枚の画像を処理しました','q-card-save':'保存','q-download-zip':'すべてダウンロード（.zip）',
      'compress-toast-batch-done':'{n}枚の画像を圧縮しました！',
      'resize-toast-batch-done':'{n}枚の画像をリサイズしました！',
      'convert-toast-batch-done':'{n}枚の画像を変換しました！','convert-strip-processed':'{n}枚の画像を{f}に変換しました',
      'rotate-toast-batch-done':'{n}枚の画像を保存しました！',
      'watermark-toast-batch-done':'{n}枚の画像に透かしを追加しました！',
      'filters-toast-batch-done':'{n}枚の画像にフィルターを適用しました！','filters-strip-processed':'「{p}」で{n}枚の画像を処理しました',
      'meme-toast-batch-done':'{n}個のミームを作成しました！','meme-strip-processed':'{n}個のミームを{f}として保存しました',

      /* AI変換ページ */
      'ai-h1':'AIに変換',
      'ai-hero-p':'PNG、JPG、WebP、BMP画像をAdobe Illustrator互換の.aiファイルに変換 — ブラウザ内で完結、Illustratorは不要です。複数ファイルを選択して一括変換もできます。',
      'ai-upload-h2':'画像をここにドロップ','ai-upload-p':'またはクリックして参照 — 1つまたは複数選択可能','ai-upload-btn':'ファイルを選択',
      'ai-queue':'キュー','ai-add-images':'画像を追加',
      'ai-opts-head':'AIエクスポート設定',
      'ai-opt-output':'出力形式','ai-opt-output-desc':'PDF互換 · Adobe Illustratorで直接開けます',
      'ai-opt-quality':'埋め込み品質','ai-range-lo':'ファイルを小さく','ai-range-hi':'画質を優先',
      'ai-opt-bg':'背景色','ai-opt-bg-desc':'透明レイヤーを統合する際、すべての画像に適用されます',
      'ai-how-label':'仕組み：',
      'ai-how-desc':'各画像は、実在する有効なベクター形式の.aiファイル内に配置ラスターとして埋め込まれます — Adobeアカウント、ライセンス、サーバーは一切不要です。複数枚を一度に変換すると、.aiファイルをまとめた.zipが1つ生成されます。Illustratorで開いた後、編集可能な本当のベクターパスが必要な場合は<em>オブジェクト→画像トレース</em>を使用してください。',
      'ai-dl-h3':'AIファイルの準備ができました！','ai-dl-btn':'別の画像を変換',
      'ai-loading':'読み込み中…','ai-convert-btn':'AIに変換','ai-converting':'変換中','ai-add-more':'追加',

      /* 圧縮ページ */
      'compress-h1':'画像を圧縮',
      'compress-hero-p':'画質を保ちながらファイルサイズを削減。スライダーをドラッグして前後を比較できます。',
      'compress-upload-note':'JPG · PNG · WebP · JPEG写真で最良の結果 · 複数選択でまとめて圧縮',
      'compress-panel-h3':'プレビュー','compress-panel-h3-compare':'前後比較','compress-change-btn':'変更',
      'compress-opts-head':'圧縮設定',
      'compress-opt-quality':'品質','compress-range-lo':'🗜 最小サイズ','compress-range-hi':'✨ 最高品質',
      'compress-opt-presets':'プリセット','compress-preset-max':'最大圧縮','compress-preset-balanced':'バランス','compress-preset-high':'高品質','compress-preset-near':'ほぼ無劣化',
      'compress-opt-format':'出力形式','compress-fmt-auto':'自動検出（推奨）','compress-fmt-jpeg':'JPEGを強制','compress-fmt-webp':'WebPを強制（圧縮率重視）','compress-fmt-png':'PNGを強制（無劣化）',
      'compress-opt-maxdim':'最大寸法（任意）','compress-note-width':'幅 px','compress-note-height':'高さ px',
      'compress-sz-original':'元のサイズ','compress-sz-compressed':'圧縮後',
      'compress-dl-h3':'圧縮完了！','compress-dl-btn':'別の画像を圧縮','compress-drag-compare':'ドラッグして比較',
      'compress-ph-maxw':'最大幅','compress-ph-maxh':'最大高さ',
      'compress-toast-saved-pct':'ファイルサイズを{p}%削減しました！','compress-toast-saved-generic':'ファイルサイズを最適化しました！',
      'compress-mode-single':'単一画像','compress-mode-batch':'バッチ — 目標サイズ',
      'compress-batch-upload-h2':'画像をここにドロップ','compress-batch-upload-p':'またはクリックして参照 — 複数選択可能','compress-batch-upload-btn':'ファイルを選択',
      'compress-batch-upload-note':'JPG · PNG · WebP — まとめて目標サイズまで圧縮',
      'compress-batch-queue':'キュー','compress-batch-add-images':'画像を追加',
      'compress-batch-opts-head':'目標サイズ設定','compress-batch-opt-target':'目標サイズ','compress-batch-custom-ph':'カスタム',
      'compress-batch-opt-format':'出力形式','compress-batch-fmt-auto':'自動（JPEGまたはWebP）',
      'compress-batch-note-label':'仕組み：','compress-batch-note-desc':'各画像の品質を段階的に下げ、目標サイズに収まるまで調整します。最低品質でも収まらない場合は、サイズを縮小して再試行します。',
      'compress-batch-btn':'目標サイズまで一括圧縮',
      'compress-batch-dl-h3':'バッチ圧縮が完了しました！','compress-batch-dl-btn':'別のバッチを圧縮',
      'compress-batch-achieved':'目標達成','compress-batch-not-achieved':'目標に到達できませんでした — 可能な最小サイズを表示しています',
      'compress-batch-images-compressed':'{n}枚の画像を圧縮 · ZIPファイル1つ','compress-batch-some-not-achieved':'一部の画像は目標サイズに到達できませんでした',
      'compress-batch-toast':'バッチ圧縮が完了しました','compress-batch-toast-rejected':'{n}個の非対応ファイルをスキップしました',

      /* リサイズページ */
      'resize-h1':'画像をリサイズ',
      'resize-hero-p':'ピクセルまたはパーセントで寸法を変更。縦横比を固定し、出力をリアルタイムでプレビュー。',
      'resize-upload-p':'またはどこでもクリックしてファイルを参照','resize-upload-note':'JPG · PNG · WebP · GIF · SVG · サイズ制限なし',
      'resize-panel-h3':'プレビュー','resize-change-btn':'変更',
      'resize-opts-head':'リサイズ設定',
      'resize-opt-mode':'モード','resize-mode-px':'ピクセル指定','resize-mode-pct':'パーセント指定',
      'resize-opt-target':'目標サイズ','resize-note-width':'幅 px','resize-note-height':'高さ px',
      'resize-opt-quickscale':'クイックスケール','resize-scale-original':'元のサイズ',
      'resize-opt-scalefactor':'拡大縮小率',
      'resize-output-label':'出力：',
      'resize-opt-constraints':'制約','resize-lock-ratio':'縦横比を固定','resize-prevent-upscale':'拡大を禁止',
      'resize-opt-format':'出力形式','resize-fmt-original':'元と同じ',
      'resize-dl-h3':'画像をリサイズしました！','resize-dl-btn':'別の画像をリサイズ',
      'resize-ph-width':'幅','resize-ph-height':'高さ',
      'resize-toast':'{w} × {h} px にリサイズしました',

      /* トリミングページ */
      'crop-h1':'画像をトリミング',
      'crop-hero-p':'画像上をクリック&ドラッグしてトリミング範囲を選択。プリセット比率で固定するか、正確なピクセル値を入力できます。',
      'crop-upload-note':'JPG · PNG · WebP · GIF',
      'crop-panel-h3':'トリミング範囲を描画','crop-clear-btn':'クリア','crop-no-selection':'未選択',
      'crop-opts-head':'トリミング設定',
      'crop-opt-aspect':'アスペクト比','crop-asp-free':'自由',
      'crop-opt-manual':'手動座標指定（px）','crop-note-left':'左（X）','crop-note-top':'上（Y）','crop-note-width':'幅','crop-note-height':'高さ',
      'crop-opt-format':'出力形式','crop-fmt-original':'元と同じ','crop-fmt-png':'PNG（透明度を保持）',
      'crop-info-note':'画像上をクリック&ドラッグしてトリミング範囲を描画します。上のプリセットで比率を固定できます。',
      'crop-dl-h3':'画像をトリミングしました！','crop-dl-btn':'別の画像をトリミング','crop-dl-info-prefix':'トリミング後:','crop-toast-none':'先にトリミング範囲を描画してください！',
      'crop-toast-applied':'トリミングを適用しました！',

      /* 変換ページ */
      'convert-h1':'画像を変換',
      'convert-hero-p':'ブラウザ内でJPG、PNG、WebP、GIF形式を即座に切り替え。',
      'convert-upload-note':'JPG · PNG · WebP · GIF · BMP · SVG',
      'convert-panel-h3':'プレビュー','convert-change-btn':'変更',
      'convert-opts-head':'変換設定',
      'convert-opt-convertto':'変換先',
      'convert-fmt-jpg-desc':'写真向け · 小さいファイルサイズ','convert-fmt-png-desc':'無劣化 · 透明度対応','convert-fmt-webp-desc':'モダン形式 · 圧縮率最高','convert-fmt-gif-desc':'アニメーション · 256色',
      'convert-opt-quality':'品質（JPG / WebP）','convert-range-lo':'ファイルを小さく','convert-range-hi':'画質を優先',
      'convert-opt-bg':'背景色','convert-opt-bg-desc':'透明なPNGをJPGに変換する際に適用されます',
      'convert-tip-label':'ヒント：','convert-tip-desc':'同じ見た目の品質で、WebPはJPEGより25〜35%小さいファイルサイズになります — Web用途に最適です。',
      'convert-dl-h3':'変換完了！','convert-dl-btn':'別の画像を変換',
      'convert-toast':'{f} に変換しました',

      /* 回転ページ */
      'rotate-h1':'回転・反転',
      'rotate-hero-p':'90°/180°回転、水平・垂直反転、または自由角度スライダーで微調整。リアルタイムプレビュー。',
      'rotate-upload-note':'JPG · PNG · WebP · GIF',
      'rotate-panel-h3':'リアルタイムプレビュー','rotate-change-btn':'変更','rotate-no-flip':'反転なし',
      'rotate-opts-head':'変形設定',
      'rotate-opt-rotate':'回転','rotate-rot-left':'左に90°','rotate-rot-right':'右に90°','rotate-reset-all':'すべてリセット',
      'rotate-opt-flip':'反転','rotate-flip-h':'水平反転','rotate-flip-v':'垂直反転',
      'rotate-opt-fineangle':'微調整角度',
      'rotate-opt-canvasbg':'キャンバス背景','rotate-bg-transparent':'透明（PNG出力）','rotate-bg-color':'カラーピッカーを使用',
      'rotate-opt-format':'出力形式','rotate-fmt-original':'元と同じ',
      'rotate-btn':'画像を保存','rotate-dl-h3':'画像の準備ができました！','rotate-dl-btn':'最初からやり直す','rotate-toast-saved':'画像を保存しました！',

      /* 透かしページ */
      'watermark-h1':'透かしを追加',
      'watermark-hero-p':'カスタムテキストを追加して画像を保護。位置、サイズ、色、不透明度をリアルタイムで調整。',
      'watermark-upload-note':'JPG · PNG · WebP',
      'watermark-panel-h3':'リアルタイムプレビュー','watermark-change-btn':'変更',
      'watermark-opts-head':'透かし設定',
      'watermark-opt-text':'透かしテキスト',
      'watermark-opt-position':'位置','watermark-pos-top':'上','watermark-pos-center':'中央','watermark-pos-bottom':'下',
      'watermark-opt-fontsize':'フォントサイズ','watermark-range-tiny':'極小','watermark-range-huge':'特大',
      'watermark-opt-opacity':'不透明度','watermark-range-invisible':'ほぼ透明','watermark-range-solid':'完全不透明',
      'watermark-opt-color':'色',
      'watermark-opt-tile':'繰り返し/タイル','watermark-toggle-tile':'画像全体に透かしをタイル配置',
      'watermark-btn':'透かし入り画像を保存','watermark-dl-h3':'透かしを追加しました！','watermark-dl-btn':'別の画像に透かしを追加',
      'watermark-dl-info-prefix':'透かしを追加しました：','watermark-dl-info-suffix':'の画像',
      'watermark-ph-text':'テキストを入力…','watermark-toast-applied':'透かしを追加しました！',

      /* フィルターページ */
      'filters-h1':'フォトフィルター',
      'filters-hero-p':'12種類の即時プリセットと8つの微調整スライダー。すべてリアルタイムで反映されます。',
      'filters-upload-h2':'写真をここにドロップ','filters-upload-note':'JPG · PNG · WebP',
      'filters-panel-h3':'リアルタイムプレビュー','filters-reset-btn':'リセット','filters-change-btn':'変更',
      'filters-opts-head':'プリセットと調整',
      'filters-opt-presets':'フィルタープリセット','filters-opt-adjustments':'微調整',
      'filters-adj-brightness':'明るさ','filters-adj-contrast':'コントラスト','filters-adj-saturation':'彩度','filters-adj-hue':'色相回転','filters-adj-blur':'ぼかし','filters-adj-invert':'反転','filters-adj-sepia':'セピア','filters-adj-grayscale':'グレースケール',
      'filters-btn':'フィルター画像を保存','filters-dl-h3':'フィルターを保存しました！','filters-dl-btn':'別のフィルターを適用',
      'filters-dl-info-applied':'を適用','filters-toast-saved':'を保存しました！',
      'filters-preset-original':'オリジナル','filters-preset-grayscale':'グレースケール','filters-preset-sepia':'セピア','filters-preset-vintage':'ビンテージ','filters-preset-vivid':'ビビッド','filters-preset-cool':'クール','filters-preset-warm':'ウォーム','filters-preset-noir':'ノワール','filters-preset-faded':'フェード','filters-preset-invert':'反転','filters-preset-dreamy':'ドリーミー','filters-preset-punch':'パンチ',

      /* ミームページ */
      'meme-h1':'ミームジェネレーター',
      'meme-hero-p':'画像に太字のキャプションを追加。自分の画像をアップロードするか、白紙のキャンバスから始められます。',
      'meme-upload-h2':'元にする画像を選択','meme-upload-p':'画像をアップロードするか、下の白紙テンプレートを選んでください',
      'meme-upload-btn':'画像をアップロード','meme-blank-btn':'白紙キャンバス','meme-upload-note':'JPG · PNG · WebP · または白紙テンプレートを使用',
      'meme-panel-h3':'ミームプレビュー','meme-change-btn':'画像を変更',
      'meme-opts-head':'キャプション設定',
      'meme-opt-top':'上部キャプション','meme-opt-bottom':'下部キャプション','meme-opt-font':'フォント','meme-opt-fontsize':'フォントサイズ',
      'meme-opt-textcolor':'文字色',
      'meme-opt-textstyle':'テキストスタイル','meme-toggle-outline':'黒縁取り（定番のミームスタイル）','meme-toggle-shadow':'ドロップシャドウ','meme-toggle-caps':'すべて大文字',
      'meme-opt-padding':'垂直パディング',
      'meme-btn-png':'PNGをダウンロード','meme-btn-jpg':'JPGをダウンロード',
      'meme-dl-h3':'ミームの準備ができました！','meme-dl-btn':'もう一つ作る','meme-dl-info-suffix':'さあシェアしよう！','meme-toast-saved-as':'ミームを保存しました：','meme-blank-dims-suffix':'白紙',
      'meme-ph-top':'上部テキスト','meme-ph-bottom':'下部テキスト',
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

    /* 7. Common tool-page upload zone (only when the page hasn't tagged its own copy) */
    var upH2 = document.querySelector('.upload-drop h2');
    if (upH2 && !upH2.hasAttribute('data-i18n')) upH2.textContent = t('upload-h2');
    var upP = document.querySelector('.upload-drop > p:not(.up-note)');
    if (upP && !upP.hasAttribute('data-i18n')) upP.textContent = t('upload-p');
    var upBtn = document.querySelector('.upload-drop .btn-grad');
    if (upBtn && !upBtn.hasAttribute('data-i18n-skip')) { var ubI = upBtn.querySelector('i'); upBtn.textContent = ' ' + t('upload-btn'); if (ubI) upBtn.insertBefore(ubI, upBtn.firstChild); }

    /* 8. Common "Download" button(s) (icon-preserving) */
    ['dlA', 'bDlA'].forEach(function (id) {
      var dlBtn = document.getElementById(id);
      if (dlBtn) { var dlI = dlBtn.querySelector('i'); dlBtn.textContent = ' ' + t('common-download-btn'); if (dlI) dlBtn.insertBefore(dlI, dlBtn.firstChild); }
    });

    /* 9. Input placeholders */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });

    /* 10. Tooltip titles */
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      el.title = t(el.getAttribute('data-i18n-title'));
    });

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
    document.dispatchEvent(new CustomEvent('lllangchange'));
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
