// Mobile nav
const hamIcon = document.getElementById("hamburger-icon");
const mobileNav = document.getElementById("mobile-nav");

hamIcon.addEventListener("click", ()=> {
    mobileNav.classList.toggle("-translate-y-[250px]");
    mobileNav.classList.toggle("translate-y-[80px]");

    console.log("wow");
});

