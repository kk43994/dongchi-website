(() => {
  const BUTTON_ID = 'hero-audio-toggle';

  function findHeroVideo() {
    return Array.from(document.querySelectorAll('video')).find(video => {
      const source = video.querySelector('source');
      return (source && /hero-video\.mp4/.test(source.getAttribute('src') || '')) || /hero-video\.mp4/.test(video.currentSrc || video.src || '');
    });
  }

  function iconMarkup() {
    return `
      <svg class="sound-off" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M4 9v6h4l5 4V5L8 9H4Z"></path>
        <path d="M18 9l4 4"></path>
        <path d="M22 9l-4 4"></path>
      </svg>
      <svg class="sound-on" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M4 9v6h4l5 4V5L8 9H4Z"></path>
        <path d="M16 8.5a5 5 0 0 1 0 7"></path>
        <path d="M18.5 6a8.5 8.5 0 0 1 0 12"></path>
      </svg>
      <span class="hero-audio-toggle__tip">Sound</span>`;
  }

  function mount() {
    if (document.getElementById(BUTTON_ID)) return true;
    const video = findHeroVideo();
    if (!video) return false;

    const hero = video.closest('section') || video.parentElement;
    if (!hero) return false;

    video.muted = true;
    video.volume = 0.75;

    const button = document.createElement('button');
    button.id = BUTTON_ID;
    button.type = 'button';
    button.className = 'hero-audio-toggle';
    button.setAttribute('aria-label', 'Turn hero video sound on');
    button.setAttribute('aria-pressed', 'false');
    button.innerHTML = iconMarkup();

    button.addEventListener('click', async event => {
      event.preventDefault();
      event.stopPropagation();
      const shouldEnableSound = video.muted || video.volume === 0;
      video.muted = !shouldEnableSound;
      video.volume = shouldEnableSound ? 0.75 : 0;
      button.classList.toggle('is-on', shouldEnableSound);
      button.setAttribute('aria-pressed', shouldEnableSound ? 'true' : 'false');
      button.setAttribute('aria-label', shouldEnableSound ? 'Turn hero video sound off' : 'Turn hero video sound on');
      try {
        await video.play();
      } catch (error) {
        video.muted = true;
        video.volume = 0;
        button.classList.remove('is-on');
        button.setAttribute('aria-pressed', 'false');
      }
    });

    hero.appendChild(button);
    return true;
  }

  if (!mount()) {
    const observer = new MutationObserver(() => {
      if (mount()) observer.disconnect();
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
    window.addEventListener('load', mount, { once: true });
  }
})();
