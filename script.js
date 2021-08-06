burger = document.querySelector('.burger');
menu = document.querySelector('ul');
navbar = document.querySelector('.navbar');
btn = document.querySelector('.listli');
burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    btn.classList.toggle('active');

});