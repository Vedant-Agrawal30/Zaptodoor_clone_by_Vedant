
  document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeIcon = document.getElementById('darkModeIcon');
    const body = document.body;

    // Check for saved dark mode preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Apply saved preference
    if (isDarkMode) {
      body.classList.add('dark-mode');
      darkModeIcon.className = 'bi bi-sun';
    }

    // Toggle dark mode
    darkModeToggle.addEventListener('click', function () {
      body.classList.toggle('dark-mode');

      // Update icon
      if (body.classList.contains('dark-mode')) {
        darkModeIcon.className = 'bi bi-sun';
        localStorage.setItem('darkMode', 'true');
      } else {
        darkModeIcon.className = 'bi bi-moon';
        localStorage.setItem('darkMode', 'false');
      }
    });
  });