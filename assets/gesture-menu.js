(() => {
  const products = [
    { name: '招牌饭', desc: '精选食材，秘制酱汁，米饭粒粒分明，营养均衡', price: 28, old: 35, sales: '50000+', image: '/images/products/signature-rice.png', tags: ['招牌推荐', '秘制酱汁', '营养均衡'], rating: '5.0（2834条评价）', badge: '人气TOP 1' },
    { name: '酥脆鸡排饭', desc: '大块鸡排炸至金黄，外酥里嫩，搭配秘制酱汁', price: 32, old: null, sales: '15000+', image: '/images/products/crispy-chicken-cutlet-rice.png', tags: ['外酥里嫩', '鸡排鲜香'], rating: '4.8（478条评价）', badge: '酥脆精选' },
    { name: '香肠饭', desc: '香肠香味浓郁，搭配新鲜时蔬，配菜丰富营养', price: 26, old: 32, sales: '38000+', image: '/images/products/sausage-rice.png', tags: ['经典美味', '香肠浓郁'], rating: '4.9（1923条评价）', badge: '经典' },
    { name: '台湾肉燥饭', desc: '正宗台湾风味，肉燥浓香四溢，米饭Q弹可口', price: 28, old: null, sales: '32000+', image: '/images/products/taiwan-braised-pork-rice.png', tags: ['台湾风味', '肉燥浓香'], rating: '4.9（1567条评价）', badge: '台式经典' },
    { name: '排骨饭', desc: '排骨肉质鲜嫩，搭配秘制酱汁，香气扑鼻', price: 32, old: null, sales: '28000+', image: '/images/products/pork-chop-rice.png', tags: ['排骨鲜嫩', '酱汁浓郁'], rating: '5.0（1320条评价）', badge: '热卖' },
  ];

  const floats = [
    '/images/products/braised-pork-rice.png',
    '/images/products/mackerel-rice.png',
    '/images/products/yellow-croaker-rice.png',
    '/images/products/crispy-chicken-wings-rice.png',
  ];

  let index = 0;
  let cart = 1;
  let cameraStream = null;
  let motionTimer = null;
  let lastMotionX = null;
  let lastGestureAt = 0;
  let dragStart = null;
  let dragX = 0;
  let dragY = 0;
  let holdTimer = null;
  let bgStarted = false;
  let parallaxBound = false;
  let keyBound = false;

  const product = (offset = 0) => products[(index + offset + products.length) % products.length];

  function shell() {
    return `
      <section class="gesture-menu-stage" id="gesture-menu-stage">
        <canvas class="gesture-particle-canvas" id="gesture-bg-canvas"></canvas>
        <div class="gesture-grain"></div>
        <div class="gesture-orb gesture-orb-a"></div><div class="gesture-orb gesture-orb-b"></div><div class="gesture-orb gesture-orb-c"></div>
        <div class="gesture-wrap">
          <div class="gesture-main">
            <div class="gesture-kicker">BENTO GESTURE MENU</div>
            <h2 class="gesture-title">隔空菜单</h2>
            <p class="gesture-subtitle">用一个手势，翻开今日想吃的台式便当。</p>
            <div class="gesture-theater" id="gesture-theater"></div>
            <div class="gesture-hint">☝ 挥手试试，左右翻页</div>
          </div>
          <aside class="gesture-side">
            <div class="gesture-cart">🛒 今日想吃 <span class="gesture-cart-count" id="gesture-cart-count">${cart}</span></div>
            <div class="gesture-panel">
              <div class="gesture-panel-head"><div class="gesture-hand-icon">🖐</div><h3>试试隔空菜单</h3></div>
              <p>开启摄像头，用手势翻页浏览<br>发现更多美味便当</p>
              <div class="gesture-safe"><strong>🔒 安全 · 仅本地识别</strong><small>摄像头画面仅在本地处理，不会上传或存储任何数据</small></div>
              <div class="gesture-camera-message" id="gesture-camera-message" aria-live="polite"></div>
              <button class="gesture-action primary" id="gesture-camera-toggle">开启隔空菜单 📹</button>
              <button class="gesture-action https" id="gesture-https-switch" hidden>尝试 HTTPS 后开启</button>
              <button class="gesture-action ghost" id="gesture-scroll-mode">继续滑动浏览</button>
            </div>
            <div class="gesture-camera" id="gesture-camera">
              <div class="gesture-camera-placeholder">
                <div class="gesture-hand-demo" aria-hidden="true"><i></i><i></i><i></i><i></i><span></span></div>
              </div><video id="gesture-video" muted playsinline></video>
              <div class="gesture-camera-top"><span class="gesture-dot"></span><span id="gesture-camera-label">摄像头未开启</span></div>
              <button class="gesture-camera-expand" title="关闭摄像头">↗</button>
              <div class="gesture-status"><b>✓</b><span id="gesture-status-text">待机 · 点击开启后挥手翻页</span></div>
            </div>
          </aside>
        </div>
        <div class="gesture-detail-backdrop" id="gesture-detail-backdrop"></div>
        <div class="gesture-toast" id="gesture-toast">OK，已加入今日想吃：${product().name}</div>
      </section>`;
  }

  function carouselHtml() {
    const p = product();
    const prev = product(-1);
    const next = product(1);
    return `
      ${floats.map(src => `<img class="gesture-food-float" src="${src}" alt="">`).join('')}
      <div class="gesture-rice-burst" aria-hidden="true"></div>
      <article class="gesture-preview gesture-preview-left"><img src="${prev.image}" alt="${prev.name}"><h3>${prev.name}</h3><p>${prev.desc}</p><div class="gesture-preview-price">¥${prev.price}</div></article>
      <article class="gesture-card" id="gesture-card" aria-label="${p.name}，可左右拖动切换，双击加入今日想吃">
        <div class="gesture-card-media"><span class="gesture-badge">🔥 ${p.badge}</span><div class="gesture-plate-glow"></div><img src="${p.image}" alt="${p.name}" id="gesture-product-img"><canvas class="gesture-pixel-canvas" id="gesture-pixel-canvas"></canvas></div>
        <div class="gesture-rating">★ ${p.rating}</div><h3 class="gesture-name">${p.name}</h3><p class="gesture-desc">${p.desc}</p>
        <div class="gesture-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
        <div class="gesture-footer"><div><div class="gesture-price"><strong>¥${p.price}</strong>${p.old ? `<del>¥${p.old}</del>` : ''}</div><div class="gesture-sales">已售 ${p.sales}</div></div><button class="gesture-choose" id="gesture-choose">选择这款 →</button></div>
      </article>
      <article class="gesture-preview gesture-preview-right"><img src="${next.image}" alt="${next.name}"><h3>${next.name}</h3><p>${next.desc}</p><div class="gesture-preview-price">¥${next.price}</div></article>
      <button class="gesture-nav-btn gesture-nav-prev" id="gesture-prev" aria-label="上一份"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg></button>
      <button class="gesture-nav-btn gesture-nav-next" id="gesture-next" aria-label="下一份"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg></button>`;
  }

  function mount() {
    const home = document.querySelector('.home-page');
    if (!home) return;
    const old = [...home.querySelectorAll('section')].find(s => /匠心产品|Our Products|进入产品中心/.test(s.innerText || ''));
    if (!old) return;
    const exists = document.getElementById('gesture-menu-stage');
    if (!exists) {
      old.insertAdjacentHTML('beforebegin', shell());
      bindStatic();
      startBackgroundParticles();
      renderCarousel();
      setupParallax();
    }
    old.style.display = 'none';
  }

  function renderCarousel(dir = 0) {
    const theater = document.getElementById('gesture-theater');
    if (!theater) return;
    theater.innerHTML = carouselHtml();
    bindCarousel();
    renderFoodParticles(dir);
    updateParallax();
    if (window.gsap && dir) {
      window.gsap.fromTo('#gesture-card', { x: dir * 160, rotation: dir * 7, opacity: 0 }, { x: 0, rotation: 0, opacity: 1, duration: .46, ease: 'back.out(1.35)' });
    }
  }

  function switchTo(dir) {
    const card = document.getElementById('gesture-card');
    const commit = () => {
      index = (index + dir + products.length) % products.length;
      renderCarousel(dir);
      setStatus(dir > 0 ? '已切换下一份 · 左推翻页' : '已切换上一份 · 右推翻页');
    };
    if (window.gsap && card) {
      window.gsap.to(card, { x: dir * -190, rotation: dir * -8, opacity: 0, duration: .2, ease: 'power2.in', onComplete: commit });
    } else {
      commit();
    }
  }

  function bindStatic() {
    document.getElementById('gesture-detail-backdrop')?.addEventListener('click', closeDetail);
    const stage = document.getElementById('gesture-menu-stage');
    if (stage && !stage.dataset.staticBound) {
      stage.dataset.staticBound = 'true';
      stage.addEventListener('click', e => {
        if (e.target.closest('#gesture-camera-toggle')) {
          e.preventDefault();
          e.stopPropagation();
          toggleCamera();
        } else if (e.target.closest('#gesture-https-switch')) {
          e.preventDefault();
          e.stopPropagation();
          switchToHttps();
        } else if (e.target.closest('.gesture-camera-expand')) {
          e.preventDefault();
          e.stopPropagation();
          stopCamera();
        } else if (e.target.closest('#gesture-scroll-mode')) {
          e.preventDefault();
          toast('继续滑动浏览：拖动餐卡即可左右翻页');
        }
      });
    }
    updateCameraAvailability();
    if (!keyBound) {
      keyBound = true;
      window.addEventListener('keydown', e => {
        if (!document.getElementById('gesture-menu-stage')) return;
        if (e.key === 'ArrowRight') switchTo(1);
        if (e.key === 'ArrowLeft') switchTo(-1);
        if (e.key.toLowerCase() === 'o') addCart('OK 手势确认');
      });
    }
  }

  function bindCarousel() {
    document.getElementById('gesture-prev')?.addEventListener('click', () => switchTo(-1));
    document.getElementById('gesture-next')?.addEventListener('click', () => switchTo(1));
    document.getElementById('gesture-choose')?.addEventListener('click', e => { e.stopPropagation(); addCart('选择确认'); });
    const card = document.getElementById('gesture-card');
    if (!card) return;
    card.addEventListener('dblclick', e => { e.stopPropagation(); addCart('OK 手势确认'); });
    card.addEventListener('click', e => { if (e.target.id !== 'gesture-choose' && !dragStart && Math.abs(dragX) < 8 && Math.abs(dragY) < 8) openDetail(); });
    card.addEventListener('pointerdown', e => {
      dragStart = { x: e.clientX, y: e.clientY };
      dragX = 0; dragY = 0;
      card.setPointerCapture?.(e.pointerId);
      card.classList.add('is-moving');
      clearTimeout(holdTimer);
      holdTimer = setTimeout(() => { card.classList.add('is-holding'); setStatus('已捏住餐卡 · 向自己拉可放大'); }, 260);
    });
    card.addEventListener('pointermove', e => {
      if (!dragStart) return;
      dragX = e.clientX - dragStart.x;
      dragY = e.clientY - dragStart.y;
      const pull = Math.min(80, Math.max(0, dragY));
      const scale = 1 + pull / 520;
      card.style.transform = `translate3d(${dragX}px, ${dragY * .28}px, 0) rotate(${dragX * .035}deg) scale(${scale})`;
    });
    const release = () => {
      clearTimeout(holdTimer);
      card.classList.remove('is-moving', 'is-holding');
      card.style.transform = '';
      if (Math.abs(dragX) > 74) switchTo(dragX < 0 ? 1 : -1);
      else if (dragY > 78) openDetail();
      dragStart = null;
      dragX = 0; dragY = 0;
    };
    card.addEventListener('pointerup', release);
    card.addEventListener('pointercancel', release);
  }

  function openDetail() {
    document.getElementById('gesture-detail-backdrop')?.classList.add('is-visible');
    document.getElementById('gesture-card')?.classList.add('is-expanded');
    setStatus('餐卡已拉近 · 点击背景返回');
  }

  function closeDetail() {
    document.getElementById('gesture-card')?.classList.remove('is-expanded');
    document.getElementById('gesture-detail-backdrop')?.classList.remove('is-visible');
  }

  function addCart(prefix = 'OK') {
    cart += 1;
    const count = document.getElementById('gesture-cart-count');
    if (count) count.textContent = cart;
    toast(`${prefix}，已加入今日想吃：${product().name}`);
    setStatus('已确认加入 · 比 OK 或双击都可以');
    if (window.gsap) window.gsap.fromTo('.gesture-cart', { scale: 1 }, { scale: 1.13, yoyo: true, repeat: 1, duration: .18 });
  }

  function toast(text) {
    const el = document.getElementById('gesture-toast');
    if (!el) return;
    el.textContent = text;
    el.classList.add('is-visible');
    clearTimeout(el._timer);
    el._timer = setTimeout(() => el.classList.remove('is-visible'), 2300);
  }

  function setStatus(text) {
    const el = document.getElementById('gesture-status-text');
    if (el) el.textContent = text;
  }

  async function updateCameraAvailability() {
    const btn = document.getElementById('gesture-camera-toggle');
    const label = document.getElementById('gesture-camera-label');
    const httpsBtn = document.getElementById('gesture-https-switch');
    if (!btn) return;
    if (!window.isSecureContext) {
      const host = location.host || '当前域名';
      const httpDomain = location.protocol === 'http:' && !isLocalHost();
      const ipHost = isIpHost();
      showCameraMessage(httpDomain
        ? ipHost
          ? `当前是 http://${host}。浏览器安全规则禁止在普通 IP/HTTP 页面弹摄像头权限，前端代码无法强行放行。请给该 IP 配置 HTTPS 证书，或改用 HTTPS 域名访问。`
          : `当前是 http://${host}，浏览器会直接拦截摄像头权限弹窗。请切到 https://${host} 后再开启。`
        : '浏览器安全限制：摄像头权限只会在 HTTPS 或 localhost 页面弹出。请用 HTTPS 访问官网后再开启。', 'warn');
      if (label) label.textContent = '需要 HTTPS';
      if (httpsBtn) httpsBtn.hidden = !httpDomain;
      if (httpDomain) {
        btn.textContent = ipHost ? 'IP 访问需配置 HTTPS' : '当前域名需要 HTTPS';
        if (httpsBtn) httpsBtn.textContent = ipHost ? '尝试 https://IP 访问' : '切换 HTTPS 后开启';
      }
      return;
    }
    if (httpsBtn) httpsBtn.hidden = true;
    if (!navigator.mediaDevices?.getUserMedia) {
      showCameraMessage('当前浏览器暂不支持网页摄像头 API，可继续使用拖动餐卡浏览。', 'warn');
      if (label) label.textContent = '浏览器不支持';
      return;
    }
    try {
      const permission = await navigator.permissions?.query?.({ name: 'camera' });
      if (permission?.state === 'denied') {
        showCameraMessage('摄像头已被浏览器拦截：请点地址栏左侧权限图标，重新允许摄像头。', 'warn');
        if (label) label.textContent = '权限被拦截';
      }
    } catch (err) {
      // Safari/部分 Chromium 环境不支持 camera 权限查询，实际点击时仍会请求。
    }
  }

  function showCameraMessage(text, tone = 'info') {
    const el = document.getElementById('gesture-camera-message');
    if (!el) return;
    el.textContent = text || '';
    el.dataset.tone = tone;
    el.classList.toggle('is-visible', Boolean(text));
  }

  function isLocalHost() {
    return /^(localhost|127\.0\.0\.1|\[::1\])(?::\d+)?$/.test(location.host);
  }

  function isIpHost() {
    const host = location.hostname;
    return /^(\d{1,3}\.){3}\d{1,3}$/.test(host) || host.includes(':');
  }

  function switchToHttps() {
    if (location.protocol === 'http:' && !isLocalHost()) {
      location.href = `https://${location.host}${location.pathname}${location.search}${location.hash}`;
    }
  }

  function cameraErrorText(err) {
    const name = err?.name || 'Error';
    if (name === 'NotAllowedError' || name === 'PermissionDeniedError') return '浏览器没有弹窗或已拒绝：请检查地址栏摄像头权限，并确保这是 HTTPS/localhost 页面。';
    if (name === 'NotFoundError' || name === 'DevicesNotFoundError') return '没有检测到可用摄像头，请连接摄像头后刷新页面再试。';
    if (name === 'NotReadableError' || name === 'TrackStartError') return '摄像头正在被其他软件占用，请关闭会议软件/相机应用后再试。';
    if (name === 'OverconstrainedError' || name === 'ConstraintNotSatisfiedError') return '摄像头规格不匹配，已尝试降级请求；如果仍失败请换浏览器或摄像头。';
    if (name === 'SecurityError') return '当前页面安全策略禁止访问摄像头，需要 HTTPS，并避免在不允许摄像头的 iframe 中打开。';
    return `摄像头启动失败（${name}）：请检查浏览器权限或继续使用拖动浏览。`;
  }

  async function requestCameraStream() {
    try {
      return await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 420 }, height: { ideal: 280 }, facingMode: 'user' },
        audio: false,
      });
    } catch (err) {
      if (err?.name === 'OverconstrainedError' || err?.name === 'ConstraintNotSatisfiedError') {
        return navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      }
      throw err;
    }
  }

  async function toggleCamera() {
    if (cameraStream) { stopCamera(); return; }
    const video = document.getElementById('gesture-video');
    const cam = document.getElementById('gesture-camera');
    const label = document.getElementById('gesture-camera-label');
    const btn = document.getElementById('gesture-camera-toggle');
    showCameraMessage('');
    if (!window.isSecureContext) {
      const text = location.protocol === 'http:' && !isLocalHost()
        ? isIpHost()
          ? `当前是 http://${location.host}，浏览器禁止在普通 IP/HTTP 页面调用摄像头。需要服务器支持 HTTPS，且证书被手机/电脑浏览器信任。`
          : `当前是 http://${location.host}，摄像头权限不会弹出。请切换到 https://${location.host}。`
        : '浏览器不会在非安全页面弹出摄像头权限。请用 HTTPS 域名访问官网，或本地用 localhost 预览。';
      showCameraMessage(text, 'warn');
      if (label) label.textContent = '需要 HTTPS';
      setStatus('安全限制 · 摄像头需要 HTTPS/localhost');
      toast('需要 HTTPS/localhost 才能弹出摄像头权限');
      return;
    }
    if (!navigator.mediaDevices?.getUserMedia) {
      showCameraMessage('当前浏览器不支持网页摄像头 API，可继续拖动餐卡浏览。', 'warn');
      if (label) label.textContent = '浏览器不支持';
      toast('当前浏览器不支持摄像头，已保留滑动浏览');
      return;
    }
    try {
      if (label) label.textContent = '正在请求权限';
      setStatus('正在唤起浏览器摄像头权限弹窗');
      cameraStream = await requestCameraStream();
      video.srcObject = cameraStream;
      await video.play();
      cam?.classList.add('is-on');
      if (label) label.textContent = '摄像头已开启';
      if (btn) btn.textContent = '关闭摄像头';
      showCameraMessage('摄像头已开启：画面仅在本地用于手势判断，不上传不存储。');
      setStatus('识别中 · 左推/右推翻页，OK 可确认');
      startMotionLoop(video);
      toast('已开启隔空菜单，左右挥手翻页');
    } catch (err) {
      console.warn('[gesture-menu] camera request failed:', err?.name, err?.message);
      if (label) label.textContent = '权限未开启';
      const text = cameraErrorText(err);
      showCameraMessage(text, 'warn');
      setStatus('未获得摄像头权限 · 可继续拖动餐卡浏览');
      toast(text);
    }
  }

  function stopCamera() {
    if (cameraStream) cameraStream.getTracks().forEach(t => t.stop());
    cameraStream = null;
    clearInterval(motionTimer);
    lastMotionX = null;
    document.getElementById('gesture-camera')?.classList.remove('is-on');
    const label = document.getElementById('gesture-camera-label');
    const btn = document.getElementById('gesture-camera-toggle');
    if (label) label.textContent = '摄像头已关闭';
    if (btn) btn.textContent = '开启隔空菜单 📹';
    setStatus('待机 · 点击开启后挥手翻页');
  }

  function startMotionLoop(video) {
    clearInterval(motionTimer);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    canvas.width = 84; canvas.height = 60;
    let previous = null;
    motionTimer = setInterval(() => {
      if (!cameraStream || video.readyState < 2) return;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      if (previous) {
        let sx = 0, count = 0;
        for (let y = 0; y < canvas.height; y += 3) {
          for (let x = 0; x < canvas.width; x += 3) {
            const i = (y * canvas.width + x) * 4;
            const diff = Math.abs(data[i] - previous[i]) + Math.abs(data[i + 1] - previous[i + 1]) + Math.abs(data[i + 2] - previous[i + 2]);
            if (diff > 72) { sx += x; count += 1; }
          }
        }
        if (count > 36) {
          const cx = sx / count;
          const now = Date.now();
          if (lastMotionX != null && now - lastGestureAt > 960) {
            const dx = cx - lastMotionX;
            if (Math.abs(dx) > 11) {
              lastGestureAt = now;
              dx > 0 ? switchTo(-1) : switchTo(1);
              setStatus(dx > 0 ? '已识别右推 · 上一份 ←←' : '已识别左推 · 下一份 →→');
            }
          }
          lastMotionX = cx;
        }
      }
      previous = new Uint8ClampedArray(data);
    }, 140);
  }

  function renderFoodParticles(dir = 0) {
    const canvas = document.getElementById('gesture-pixel-canvas');
    const img = document.getElementById('gesture-product-img');
    if (!canvas || !img) return;
    const ctx = canvas.getContext('2d');
    const run = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, rect.width * ratio);
      canvas.height = Math.max(1, rect.height * ratio);
      const sample = document.createElement('canvas');
      const sw = 96, sh = 66;
      sample.width = sw; sample.height = sh;
      const sctx = sample.getContext('2d', { willReadFrequently: true });
      try {
        sctx.clearRect(0, 0, sw, sh);
        sctx.drawImage(img, 0, 0, sw, sh);
        const pixels = sctx.getImageData(0, 0, sw, sh).data;
        const points = [];
        for (let y = 2; y < sh; y += 3) {
          for (let x = 2; x < sw; x += 3) {
            const i = (y * sw + x) * 4;
            if (pixels[i + 3] > 25 && Math.random() > .7) {
              points.push({
                x: canvas.width * (.18 + x / sw * .64),
                y: canvas.height * (.18 + y / sh * .58),
                ox: (Math.random() - .5 + dir * .25) * 46 * ratio,
                oy: (Math.random() - .55) * 44 * ratio,
                r: (Math.random() * 2.1 + .9) * ratio,
                c: `rgba(${pixels[i]},${pixels[i + 1]},${pixels[i + 2]},.78)`,
              });
            }
          }
        }
        let start;
        const draw = ts => {
          start ||= ts;
          const p = Math.min(1, (ts - start) / 1550);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          const ease = 1 - Math.pow(1 - p, 3);
          points.forEach(pt => {
            ctx.globalAlpha = Math.max(0, 1 - p * .92);
            ctx.fillStyle = pt.c;
            ctx.beginPath();
            ctx.ellipse(pt.x + pt.ox * ease, pt.y + pt.oy * ease, pt.r * (1 + ease * 1.4), pt.r * (1.5 + ease), Math.PI / 4, 0, Math.PI * 2);
            ctx.fill();
          });
          ctx.globalAlpha = 1;
          if (p < 1) requestAnimationFrame(draw);
        };
        requestAnimationFrame(draw);
      } catch (err) {
        sparkleFallback(ctx, canvas);
      }
    };
    img.complete ? run() : img.addEventListener('load', run, { once: true });
  }

  function sparkleFallback(ctx, canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 120; i++) {
      ctx.fillStyle = i % 3 ? 'rgba(255,255,255,.82)' : 'rgba(255,122,18,.45)';
      ctx.beginPath();
      ctx.ellipse(canvas.width * (.2 + Math.random() * .62), canvas.height * (.1 + Math.random() * .72), Math.random() * 2 + 1, Math.random() * 4 + 2, Math.random() * Math.PI, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function startBackgroundParticles() {
    if (bgStarted) return;
    bgStarted = true;
    const canvas = document.getElementById('gesture-bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = 0, h = 0, parts = [];
    const size = () => {
      const ratio = window.devicePixelRatio || 1;
      w = canvas.width = Math.max(1, canvas.offsetWidth * ratio);
      h = canvas.height = Math.max(1, canvas.offsetHeight * ratio);
      parts = Array.from({ length: 118 }, (_, i) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: (Math.random() * 5 + 2) * ratio,
        v: (Math.random() * .45 + .12) * ratio,
        spin: Math.random() * Math.PI,
        c: i % 3 === 0 ? 'rgba(139,195,74,.48)' : i % 3 === 1 ? 'rgba(255,122,18,.34)' : 'rgba(255,255,255,.78)',
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.x += p.v;
        p.y += Math.sin((p.x + p.r) / 82) * .24;
        p.spin += .01;
        if (p.x > w + 30) p.x = -30;
        ctx.fillStyle = p.c;
        ctx.beginPath();
        ctx.ellipse(p.x, p.y, p.r * .55, p.r * 1.25, Math.PI / 4 + p.spin, 0, Math.PI * 2);
        ctx.fill();
      }
      requestAnimationFrame(draw);
    };
    size(); draw();
    window.addEventListener('resize', size, { passive: true });
  }

  function setupParallax() {
    if (parallaxBound) return;
    parallaxBound = true;
    updateParallax();
    window.addEventListener('scroll', updateParallax, { passive: true });
    window.addEventListener('resize', updateParallax, { passive: true });
  }

  function updateParallax() {
    const sec = document.getElementById('gesture-menu-stage');
    if (!sec) return;
    const r = sec.getBoundingClientRect();
    const vh = innerHeight || 900;
    const p = Math.max(-1, Math.min(1, (vh * .5 - (r.top + r.height * .5)) / (vh + r.height)));
    const enter = Math.max(0, Math.min(1, (vh - r.top) / (vh * .9)));
    const set = (sel, y, x = 0, scale = 1) => { const el = document.querySelector(sel); if (el) el.style.transform = `translate3d(${x}px,${y}px,0) scale(${scale})`; };
    set('.gesture-orb-a', p * -68, p * 22, 1 + enter * .04);
    set('.gesture-orb-b', p * 92, p * -34, 1 + enter * .06);
    set('.gesture-kicker', p * -18);
    set('.gesture-title', p * -34, 0, 1 + enter * .015);
    set('.gesture-subtitle', p * -22);
    set('.gesture-theater', p * -46, 0, 1 + enter * .018);
    set('.gesture-panel', p * 28);
    set('.gesture-cart', p * 18);
    const left = document.querySelector('.gesture-preview-left');
    const right = document.querySelector('.gesture-preview-right');
    if (left) left.style.transform = `translate3d(${p * -38}px,${p * 26}px,0) rotateY(18deg) rotateZ(-4deg) scale(.92)`;
    if (right) right.style.transform = `translate3d(${p * 38}px,${p * 26}px,0) rotateY(-18deg) rotateZ(4deg) scale(.92)`;
  }

  const observer = new MutationObserver(() => {
    if (location.hash === '' || location.hash === '#/' || location.pathname === '/') mount();
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener('hashchange', () => setTimeout(mount, 450));
  setTimeout(mount, 900);
})();
