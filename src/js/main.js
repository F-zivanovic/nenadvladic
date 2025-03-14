// Open/close mobile menu on smaller devices
const hamburgerIcon  = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

hamburgerIcon.addEventListener('click', ()=>{navList.classList.toggle('active');})

// Open dropdown menu when click on nav list item
const dropdownMenu = document.getElementById('dropddown');
const activeDropdownMenu = document.getElementById('drodpwon-active');

activeDropdownMenu.addEventListener('click', function(e){
    e.preventDefault();
    dropdownMenu.classList.toggle('open');
})

// Close hamburger menu on width grather than 1200px
window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
      navList.classList.remove('active');
      dropdownMenu.classList.remove('open');
    }
});