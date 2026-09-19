// Select the button and the body element
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// 1. Check if the user previously saved a dark theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
}

// 2. Listen for clicks on the toggle button
themeToggleBtn.addEventListener('click', () => {
    // Toggle the class on the body
    body.classList.toggle('dark-theme');
    
    // 3. Save the current preference to localStorage
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});