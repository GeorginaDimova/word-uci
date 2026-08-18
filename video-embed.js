(() => {
  const app = document.getElementById('app');

  function enhanceVideos(root = document) {
    root.querySelectorAll('a.video-source[href]').forEach(link => {
      if (link.dataset.videoEnhanced === '1') return;
      link.dataset.videoEnhanced = '1';

      const originalUrl = link.getAttribute('href');
      if (!originalUrl || !originalUrl.includes('youtube.com/embed/')) return;

      const match = originalUrl.match(/youtube\.com\/embed\/([^?&#/]+)/i);
      if (!match) return;
      const videoId = match[1];

      const card = document.createElement('section');
      card.className = 'video-embed-card';
      card.innerHTML = `
        <div class="video-frame">
          <iframe
            src="${originalUrl}"
            title="Видео од оригиналниот Microsoft Word материјал"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen></iframe>
        </div>
        <div class="video-meta">
          <b>🎬 Видео од оригиналниот материјал</b>
          <small>Видеото е вградено директно во лекцијата. За репродукција е потребен интернет.</small>
          <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank" rel="noopener">▶ Отвори на YouTube</a>
        </div>`;

      link.replaceWith(card);
    });
  }

  enhanceVideos(document);

  if (app) {
    new MutationObserver(() => enhanceVideos(app)).observe(app, {
      childList: true,
      subtree: true
    });
  }
})();
