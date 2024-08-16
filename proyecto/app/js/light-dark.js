function darkLight() {
    const btnDarkLight = document.getElementById('btn-darklight');
    var darkLight = document.getElementById('darkLight');

    if (btnDarkLight.classList.contains('bi-moon-fill')) {
        btnDarkLight.classList.remove('bi-moon-fill');
        btnDarkLight.classList.add('bi-sun-fill');
        darkLight.href = 'css/dark.css'; // Cambiar a dark
    } else {
        btnDarkLight.classList.remove('bi-sun-fill');
        btnDarkLight.classList.add('bi-moon-fill');
        darkLight.href = 'css/light.css'; // Cambiar a light
    }
}