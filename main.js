const ham = document.querySelector('.ham');
const links = document.querySelector('.e-menu');
const menu = document.querySelector('#menu');
const bars = document.querySelectorAll('.ham span')

ham.addEventListener('click', () => {
    links.classList.toggle('active');
    menu.classList.toggle('active');
    bars.forEach(child => {child.classList.toggle('animation')});
});