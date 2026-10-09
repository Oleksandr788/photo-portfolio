// Перемикання мобільного меню (Burger Menu)
document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.querySelector('.burger-btn');
    const nav = document.querySelector('.nav');

    if (burgerBtn && nav) {
        burgerBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
});