// NAVBAR HEADER SYSTEM
let navbar = document.querySelector(".navbar")
let menuIcon = document.querySelector(".menuicon");
let closeIcon = document.querySelector(".closeicon");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
});
closeIcon.addEventListener("click", () => {
    navbar.classList.remove("active");
});



// SMART STICKY HEADER SYSTEM
let header = document.querySelector(".header-section");

window.addEventListener("scroll", function() {
header.classList.toggle("sticky", window.scrollY > 180)
});
window.addEventListener("scroll", function(){
    navbar.classList.remove("active", window.scrollY > 0)
});