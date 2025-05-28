(function() {
  const style = document.createElement('style');
  style.textContent = `
    html, body {
      background-color: #333333 !important;
      transition: background-color 0s !important;
    }

    html:not([data-theme]) {
      background-color: #333333 !important;
    }

    body:not([style*="background"]) {
      background-color: #333333 !important;
    }
  `;

  if (document.head) {
    document.head.insertBefore(style, document.head.firstChild);
  } else {
    const observer = new MutationObserver((mutations, obs) => {
      const head = document.head;
      if (head) {
        head.insertBefore(style, head.firstChild);
        obs.disconnect();
      }
    });
    observer.observe(document, { childList: true, subtree: true });
  }

  document.documentElement.style.backgroundColor = '#333333';
  if (document.body) {
    document.body.style.backgroundColor = '#333333';
  }

  window.addEventListener('load', () => {
    setTimeout(() => {
      style.remove();
      document.documentElement.style.backgroundColor = '';
      if (document.body) {
        document.body.style.backgroundColor = '';
      }
    }, 100);
  });
})();
