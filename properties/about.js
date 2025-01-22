// Navbar
let navbar = document.querySelector("nav");
let hideMenu = document.querySelector(".close-btn");
let showMenu = document.querySelector(".menu-btn")


showMenu.addEventListener("click", () => {
  gsap.set(".res-nav", {
    x: 500,
    display: "none",
  });
  gsap.to(".res-nav", {
    x: 0,
    display: "block",
    duration: 0.5,
  });
});

hideMenu.addEventListener("click", () => {
  gsap.to(".res-nav", {
    x: 500,
    display: "none",
    duration: 0.5,
  });
});


// Slide

let slideContent = document.querySelector(".sub-divs");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let counter = document.querySelector("#counter");
let total = document.querySelector("#total");
let subCounter = document.querySelector(".counter");
let subTotal = document.querySelector(".total");

total.innerHTML = "0" + slideContent.children.length;
let x = 1;
counter.innerHTML = "0" + x;
subCounter.innerHTML = counter.innerHTML;
subTotal.innerHTML = total.innerHTML;

let screenWidth;

setInterval(() => {
  screenWidth = window.innerWidth;
  if (screenWidth > 800) {
    gsap.set(".res-nav", {
      display: "none",
    });
  }
}, 100);

next.addEventListener("click", () => {
    if (slideContent.children.length > 3 || screenWidth <= 800) {
        slideContent.appendChild(slideContent.children[0]);
        x = x + 1;
        if (x > slideContent.children.length) {
            x = 1;
        }
        counter.innerHTML = "0" + x;
        subCounter.innerHTML = counter.innerHTML;
        subTotal.innerHTML = total.innerHTML;

        gsap.from(slideContent.children, {
            x: 500,
            opacity: 0,
            duration: 0.5,
        });
        
    } else {
        null;
    }
});
prev.addEventListener("click", () => {
    if (slideContent.children.length > 3 || screenWidth <= 800) {
        slideContent.prepend(slideContent.children[slideContent.children.length - 1]);
        x = x - 1;
        if (x == 0) {
            x = slideContent.children.length;
        }
        counter.innerHTML = "0" + x;
        subCounter.innerHTML = counter.innerHTML;
        subTotal.innerHTML = total.innerHTML;

        gsap.from(slideContent.children, {
            x: -500,
            opacity: 0,
            duration: 0.5,
        });
        
    } else {
        null;
    }
});