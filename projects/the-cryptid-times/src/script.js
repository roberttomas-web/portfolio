
// Nav appear/dissapear on scroll up/down
const navBar = document.getElementById("nav");

let scrollYValue = 0;
window.addEventListener("scroll", () => {
    if (window.scrollY > scrollYValue) {
        hideNav();
    }
    if (window.scrollY < scrollYValue) {
        showNav();
    }
    scrollYValue = window.scrollY;
});

function hideNav() {
    navBar.classList.add("h-0");
    navBar.classList.remove("h-[8vh]");
}
function showNav() {
    navBar.classList.remove("h-0");
    navBar.classList.add("h-[8vh]");
}


// Hamberger open/close
const hambMenu = document.getElementById("mobile-hamberger-menu");

document.getElementById("hamberger-icon").addEventListener("click", () => {
    hambMenu.classList.toggle("w-0");
    hambMenu.classList.toggle("w-full");

    document.getElementById("hamberger-icon").classList.toggle("bi-list");
    document.getElementById("hamberger-icon").classList.toggle("bi-x-lg");

    document.body.classList.toggle("overflow-hidden"); // Stop page scrolling
});


// Slider next/prev buttons
const slideHolder = document.getElementById("slide-holder");
const nextBut = document.getElementById("next-button");
const prevBut = document.getElementById("previous-button");

nextBut.addEventListener("click", ()=> {
    slideHolder.scrollBy({left:300, behavior:"smooth"});
});
prevBut.addEventListener("click", ()=> {
    slideHolder.scrollBy({left:-300, behavior:"smooth"});
});


// Slider next/prev buttons for monthly sightings
const slideHolderSightings = document.getElementById("slide-holder-sightings");
const nextButSightings = document.getElementById("next-button-sightings");
const prevButSightings = document.getElementById("previous-button-sightings");

nextButSightings.addEventListener("click", ()=> {
    slideHolderSightings.scrollBy({left:300, behavior:"smooth"});
});
prevButSightings.addEventListener("click", ()=> {
    slideHolderSightings.scrollBy({left:-300, behavior:"smooth"});
});





// Sightings data
const sightings = [
    {
        tags: "#FOREST&emsp;#OMNIVORE",
        name: "Bigfoot",
        sightings: "12",
        sightingsColor: "bg-green-600",
        danger: "67",
        dangerColor: "bg-orange-400",
        image: "sighting-bigfoot"
    },
    {
        tags: "#ANCIENT&emsp;#SCOTLAND",
        name: "Loch Ness Monster",
        sightings: "2",
        sightingsColor: "bg-green-600",
        danger: "17",
        dangerColor: "bg-orange-400",
        image: "sighting-loch-ness"
    },
    {
        tags: "#NOCTURNAL&emsp;#DEADLY",
        name: "CHUPACABRA",
        sightings: "50",
        sightingsColor: "bg-yellow-400",
        danger: "90",
        dangerColor: "bg-red-500",
        image: "sighting-chupacabra"
    },
    {
        tags: "#BAD-OMEN&emsp;#CUNNING",
        name: "MothMan",
        sightings: "1",
        sightingsColor: "bg-green-600",
        danger: "UNKNOWN",
        dangerColor: "bg-black",
        image: "sighting-moth-man"
    },
    {
        tags: "#WOODS&emsp;#SCREAMING-HORROR",
        name: "Jersey Devil",
        sightings: "81",
        sightingsColor: "bg-orange-400",
        danger: "24",
        dangerColor: "bg-green-600",
        image: "sighting-jersey-devil"
    },
    {
        tags: "#SNOW&emsp;#RUSSIA",
        name: "Yeti",
        sightings: "32",
        sightingsColor: "bg-yellow-400",
        danger: "48",
        dangerColor: "bg-yellow-400",
        image: "sighting-yeti"
    }
];

// Create and display recent sightings
const testSlideHolder = document.getElementById("slide-holder-sightings");

sightings.forEach((i) => {

    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
                <div class="group relative bg-[url(images/${i.image}.webp)] bg-cover min-w-[380px] w-[380px] min-h-[270px] h-[270px] bg-center overflow-hidden snap-start">
                <div class="absolute top-0 left-0 bg-stone-300/80 dark:bg-stone-700/80 group-hover:bg-stone-800/75 dark:group-hover:bg-blue-800/80 border border-stone-500  transition-colors duration-500 w-full h-full p-8 flex flex-col gap-4">
                    <p class="text-xs text-stone-700 dark:text-white group-hover:text-white transition-colors duration-600">${i.tags}</p>
                    <h4 class="text-2xl font-semibold tracking-widest  group-hover:text-white transition-colors duration-700">${i.name}</h4>
                    <div class="flex justify-between mx-6">
                        <div class="flex flex-col gap-4">
                            <p class="group-hover:text-white transition-colors duration-600 -mb-2">Sightings</p>
                            <div class="flex gap-6">
                                <div class="${i.sightingsColor} rounded-4xl w-[30px] h-[30px]"></div>
                                <p class="font-bold text-xl tracking-wider group-hover:text-white transition-colors duration-600">${i.sightings}</p>
                            </div>
                        </div>
                        <div class="flex flex-col gap-4">
                            <p class="group-hover:text-white transition-colors duration-600 -mb-2">Danger Level</p>
                            <div class="flex gap-6"> <div class="${i.dangerColor} rounded-4xl w-[30px] h-[30px]"></div>
                                <p class="font-bold text-xl tracking-wider group-hover:text-white transition-colors duration-600">${i.danger}</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 mt-auto">
                        <h4 class="tracking-wider font-medium group-hover:text-green-400 transition-colors duration-300"> Learn More</h4>
                        <i class="bi bi-arrow-right-short text-2xl group-hover:text-green-400 transition-colors duration-300"></i>
                    </div>
                </div>
            </div>
    `;
    testSlideHolder.appendChild(newDiv);
    console.log("HERE");

});
