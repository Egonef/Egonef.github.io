
const scrollsec1 = document.getElementById('sec1');
const scrollsec2 = document.getElementById('sec2');
const scrollsec3 = document.getElementById('sec3');


const seccion1 = document.getElementById('seccion1');
const seccion2 = document.getElementById('seccion2');
const seccion3 = document.getElementById('seccion3');


function scroll1(){
    seccion1.scrollIntoView({behavior: "smooth"});
    scrollsec1.classList.add("selected");

    scrollsec2.classList.remove("selected");
    scrollsec3.classList.remove("selected");
}

function scroll2(){
    seccion2.scrollIntoView({behavior: "smooth"});
    scrollsec2.classList.add("selected");

    scrollsec1.classList.remove("selected");
    scrollsec3.classList.remove("selected");
}

function scroll3(){
    seccion3.scrollIntoView({behavior: "smooth"});
    scrollsec3.classList.add("selected");

    scrollsec1.classList.remove("selected");
    scrollsec2.classList.remove("selected");
}