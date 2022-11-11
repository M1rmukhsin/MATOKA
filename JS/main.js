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
    const navMenu = document.querySelector(".nav-menu-inner");
    if (navMenu.style.left === "100%") {
        navMenu.style.left = "0";
    } else {
        navMenu.style.left = "100%";
    }
}
