//Toggle para cambiar de tema - Light/Dark Toggle theme
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});