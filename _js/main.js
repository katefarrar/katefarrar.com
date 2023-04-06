const btn = document.getElementById('toggle-btn');
const icon = document.getElementById('mode-icon');

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    icon.classList.remove('ph-sun');
    icon.classList.add('ph-moon');
    localStorage.setItem('theme', 'dark');
  } else {
    icon.classList.remove('ph-moon');
    icon.classList.add('ph-sun');
    localStorage.setItem('theme', 'light');
  }
}

btn.addEventListener('click', toggleTheme);

// Check if user has set a theme preference before
const theme = localStorage.getItem('theme');

if (theme === 'light') {
  document.body.classList.remove('dark-theme');
  icon.classList.remove('ph-moon');
  icon.classList.add('ph-sun');
} else {
  document.body.classList.add('dark-theme');
  icon.classList.remove('ph-sun');
  icon.classList.add('ph-moon');
}
