document.addEventListener("DOMContentLoaded", () => {
    const themeToggler = document.querySelector('.theme-toggler');
    const lightModeIcon = themeToggler.querySelector('.fa-sun');
    const darkModeIcon = themeToggler.querySelector('.fa-moon');

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme-variables');
        darkModeIcon.classList.add('active');
        lightModeIcon.classList.remove('active');
    } else {
        document.body.classList.remove('dark-theme-variables');
        lightModeIcon.classList.add('active');
        darkModeIcon.classList.remove('active');
    }

    // Toggle Theme
    themeToggler.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme-variables');
        
        lightModeIcon.classList.toggle('active');
        darkModeIcon.classList.toggle('active');

        if (document.body.classList.contains('dark-theme-variables')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.querySelector('aside');
    const sidebarLinks = document.querySelectorAll('.sidebar a');  

    menuBtn.addEventListener('click', () => {
        sidebar.classList.add('open');
    });
    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('open');
    });
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            sidebarLinks.forEach(link => link.classList.remove('active'));
            
            link.classList.add('active');
        });
    });
});

