// Theme Toggle Script
    const toggle = document.getElementById('theme-toggle');
    toggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      toggle.textContent = document.documentElement.classList.contains('dark') ? '☀️' : '🌙';
    });