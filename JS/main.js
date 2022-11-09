const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

function toggleHam() {
    const hamburger = document.querySelector(".hamburger");
    if (hamburger.classList.toggle === "active") {
        hamburger.classList.toggle("");
    } else {
        hamburger.classList.toggle("active");
    }
}

function toggleNav() {
    const navMenu = document.querySelector(".nav-menu");
    if (navMenu.style.left === "120%") {
        navMenu.style.left = "0";
    } else {
        navMenu.style.left = "0";
    }
}
