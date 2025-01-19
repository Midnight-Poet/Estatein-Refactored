let navbar = document.querySelector("nav");
let hideMenu = document.querySelector(".close-btn");
let showMenu = document.querySelector(".menu-btn")

let screenWidth;

setInterval(() => {
  screenWidth = window.innerWidth;
  if (screenWidth > 800) {
    gsap.set(".res-nav", {
      display: "none",
    });
  }
}, 100);

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