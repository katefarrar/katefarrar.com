const btn = document.getElementById('toggle-btn');
const icon = document.getElementById('mode-icon');

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    icon.classList.remove('ph-sun');
    icon.classList.add('ph-moon');
  } else {
    icon.classList.remove('ph-moon');
    icon.classList.add('ph-sun');
  }
}

btn.addEventListener('click', toggleTheme);

// Add this code to default to dark theme on page load
document.body.classList.add('dark-theme');
icon.classList.remove('ph-bold-light');
icon.classList.add('ph-bold-dark');
