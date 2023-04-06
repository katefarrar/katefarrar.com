(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}]},{},[1]);
