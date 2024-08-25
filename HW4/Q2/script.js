const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const rootElement = document.documentElement;
const scrollButton = document.getElementById('scrollButton');
const targetSection = document.getElementById('targetSection');


let currentTheme = localStorage.getItem('theme') || 'light';
applyTheme(currentTheme);

themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(currentTheme);
});

scrollButton.addEventListener('click', () => {
    targetSection.scrollIntoView({ behavior: 'smooth' });
});

function applyTheme(theme) {
    if (theme === 'dark') {
        rootElement.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '🌜';
    } else {
        rootElement.setAttribute('data-theme', 'light');
        themeIcon.textContent = '🌞';
    }
    localStorage.setItem('theme', theme);
}

if (!localStorage.getItem('theme')) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
}
