const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme == 'dark') {
    body.classList.add('dark-theme');
}