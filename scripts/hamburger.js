const hamburger = document.querySelector('.hamburger .btn-icon');
const navabr = document.querySelector('.navbar');
const btnNavbarClose = document.querySelector('.navbar-close-icon .btn-icon');

btnNavbarClose.addEventListener('click', toggleNavbarState);
hamburger.addEventListener('click', toggleNavbarState);

function toggleNavbarState(e) {
    navabr.classList.toggle('navbar-open');
}