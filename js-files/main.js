let hamburger = document.querySelector(".hamburger-menu");
let navBar = document.querySelector(".nav-bar");

hamburger.addEventListener("click", () => {
    navBar.classList.toggle("open");
})