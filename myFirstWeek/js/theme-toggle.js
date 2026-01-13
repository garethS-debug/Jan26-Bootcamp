(function(){
  const KEY = 'site-theme';
  const toggle = document.querySelector('.toggle-control input[type="checkbox"]');

  function applyTheme(name){
    if(name === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    else document.documentElement.removeAttribute('data-theme');
  }

  const saved = localStorage.getItem(KEY);
  // default to light if nothing saved
  const start = saved || 'light';
  applyTheme(start);
  if(toggle) toggle.checked = start === 'dark';

  if(!toggle) return;
  toggle.addEventListener('change', () => {
    const theme = toggle.checked ? 'dark' : 'light';
    applyTheme(theme);
    localStorage.setItem(KEY, theme);
  });
})();