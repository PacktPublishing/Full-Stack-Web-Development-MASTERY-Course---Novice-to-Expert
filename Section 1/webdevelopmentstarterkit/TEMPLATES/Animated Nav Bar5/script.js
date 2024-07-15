const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('toggle-menu');
const closeMenu = document.getElementById('close-menu');

toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show');
})

closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show');
})