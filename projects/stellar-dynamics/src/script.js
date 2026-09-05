
// Hamberger menu open/close
const hambIcon = document.getElementById("hamberger-icon");
const mainNav = document.getElementById("main-nav");
const mobileNav = document.getElementById("mobile-nav");

hambIcon.addEventListener("click", ()=> {
    mobileNav.classList.toggle("translate-x-[350vw]");
    mainNav.classList.toggle("border-stone-800");
    mainNav.classList.toggle("border-white");
    hambIcon.classList.toggle("bi-grid");
    hambIcon.classList.toggle("bi-x-octagon");
    hambIcon.classList.toggle("spin-animation");
});

// Header arrow scroll (and circles)
const headerSlideHolder = document.getElementById("header-slide-holder");
const rightArrow = document.getElementById("header-right-arrow");
const leftArrow = document.getElementById("header-left-arrow");
const rightCircle = document.getElementById("right-circle");
const leftCircle = document.getElementById("left-circle");

rightArrow.addEventListener("click", ()=> {
    headerSlideHolder.scrollBy({left:600, behavior:"smooth"});
    toggleCircle()
});
leftArrow.addEventListener("click", ()=> {
    headerSlideHolder.scrollBy({left:-600, behavior:"smooth"});
    toggleCircle()
});
rightCircle.addEventListener("click", ()=> {
    headerSlideHolder.scrollBy({left:600, behavior:"smooth"});
    toggleCircle()
});
leftCircle.addEventListener("click", ()=> {
    headerSlideHolder.scrollBy({left:-600, behavior:"smooth"});
    toggleCircle()
});
function toggleCircle() {
    rightCircle.classList.toggle("bi-circle-fill");
    rightCircle.classList.toggle("bi-circle");
    leftCircle.classList.toggle("bi-circle-fill");
    leftCircle.classList.toggle("bi-circle");
}

// Footer accordion
let accHead1 = document.getElementById("accordion-head-1");
let accCont1 = document.getElementById("accordion-content-1");
accHead1.addEventListener("click", ()=>{
    accCont1.classList.toggle("h-0");
    accCont1.classList.toggle("h-70");
    // Aria-expanded toggle
    if(accHead1.getAttribute("aria-expanded") === "false") {
        accHead1.setAttribute("aria-expanded", "true");
    } else {
        accHead1.setAttribute("aria-expanded", "false");
    }
});

let accHead2 = document.getElementById("accordion-head-2");
let accCont2 = document.getElementById("accordion-content-2");
accHead2.addEventListener("click", ()=>{
    accCont2.classList.toggle("h-0");
    accCont2.classList.toggle("h-38");
    // Aria-expanded toggle
    if(accHead2.getAttribute("aria-expanded") === "false") {
        accHead2.setAttribute("aria-expanded", "true");
    } else {
        accHead2.setAttribute("aria-expanded", "false");
    }
});

let accHead3 = document.getElementById("accordion-head-3");
let accCont3 = document.getElementById("accordion-content-3");
accHead3.addEventListener("click", ()=>{
    accCont3.classList.toggle("h-0");
    accCont3.classList.toggle("h-100");
    // Aria-expanded toggle
    if(accHead3.getAttribute("aria-expanded") === "false") {
        accHead3.setAttribute("aria-expanded", "true");
    } else {
        accHead3.setAttribute("aria-expanded", "false");
    }
});



// Fade elements in
function fadeInOnScroll() {
    const elementsToFade = document.querySelectorAll(".fade-in");   
    const bottomTrigger = window.innerHeight * 0.9;                 

    elementsToFade.forEach(i => {                                 
        const elementTop = i.getBoundingClientRect().top;            

        if(elementTop < bottomTrigger) {                        
            i.classList.add("remove-fade");
        }
    });
}

window.addEventListener("scroll", fadeInOnScroll);
fadeInOnScroll();

