// This script is shared by every page. No frameworks are required.
(function () {
  const root = document.documentElement;
  const button = document.querySelector('.theme-toggle');
  const storageKey = 'my-notes-theme';

  function getSavedTheme() {
    try { return localStorage.getItem(storageKey); }
    catch (_) { return null; }
  }
  function saveTheme(theme) {
    try { localStorage.setItem(storageKey, theme); }
    catch (_) { /* Still works even if browser storage is unavailable. */ }
  }
  function applyTheme(theme) {
    root.dataset.theme = theme;
    button.textContent = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
    button.setAttribute('aria-pressed', String(theme === 'dark'));
  }

  if (!button) return;
  const saved = getSavedTheme();
  const preferred = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  applyTheme(saved === 'dark' || saved === 'light' ? saved : preferred);
  button.addEventListener('click', function () {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    saveTheme(next);
  });
})();
