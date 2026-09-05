// Nav shadow on scroll
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        nav.classList.add("shadow-xl");
    } else {
        nav.classList.remove("shadow-xl");
    }
});

// Hide nav after Y >= 2000 down
window.addEventListener("scroll", () => {
    if (window.scrollY >= 2000) {
        nav.classList.add("overflow-hidden");
        nav.classList.remove("h-20");
        nav.classList.add("h-0");
    } else {
        nav.classList.remove("h-0");
        nav.classList.add("h-20");
    }
});

// Mobile nav open/close
const mobileNav = document.getElementById("mobile-nav");
let mobileNavOpen = false;
const hambergerIcon = document.getElementById("hamburgur-icon");

hambergerIcon.addEventListener("click", () => {
    if (mobileNavOpen == false) {
        mobileNav.style.height = mobileNav.scrollHeight + "px";
        mobileNavOpen = true;
        hambergerIcon.classList.add("rotate-90");
    } else {
        mobileNav.style.height = "0";
        hambergerIcon.classList.remove("rotate-90");
        mobileNavOpen = false;
    }
});


// Show all presenters
const seeAllBtn = document.getElementById("seeAllBtn");
const hiddenPresentors = document.querySelectorAll(".person");

seeAllBtn.addEventListener("click", () => {
    seeAllBtn.classList.add("hidden");

    hiddenPresentors.forEach((i) => {
        if(i.classList.contains("hidden")) {
            i.classList.remove("hidden");
        }
    });
});