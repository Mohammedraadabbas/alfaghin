let hamburger = document.querySelector(".hamburger-menu");
let navBar = document.querySelector(".nav-bar");
let navItem = document.querySelectorAll(".nav-bar li");

hamburger.addEventListener("click", () => {
    navBar.classList.toggle("open");
    navItem.forEach(link =>{
        link.classList.toggle("fade")
    })
})