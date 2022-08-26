const navbar = document.querySelector('.fixed-navbar');
const navbarCancel = document.querySelector('.navbar-cancel')
function myFunction() {
navbar.classList.toggle('navbar-fixed-show');
}
navbarCancel.addEventListener('click', ()=> {
    navbar.classList.remove('navbar-fixed-show')
})