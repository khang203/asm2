var arrSlide = [
    "vespa_dior_2100x900.webp",
    "cdc-homme-cd-diamond69_1440_1200.webp",
    "personnalisation11_1440_1200.webp",
    "cover6_1440_1200.jpg",
    "iconics-cn-lady-dior_1440_1200.webp",
    "sf-luge-capsule-ski2.webp"
];
var i = 0;
var vSlideImg = document.getElementById("mySlide");
var t;

function fNext() {
    i++;
    if (i >= arrSlide.length) i = 0;
    vSlideImg.src = "./images/slideshow/" +
        arrSlide[i];
    // alert(vSlideImg.src);
}

function fStart() {
    t = window.setInterval(fNext, 2500);
    TransitionEvent;
}