function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.getElementById('nxt_theme').innerHTML = (themeName === 'theme-light') ?
            'Dark <i class="fas fa-moon  fa-lg  "></i>' : 
            'Light <i class="fas fa-sun fa-lg  "></i>';
    document.documentElement.className = themeName;
}
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
    } else {
        setTheme('theme-light');
    }
})();