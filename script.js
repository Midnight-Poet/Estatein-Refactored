// Loading
if (document.onloadeddata = false) {
	gsap.to('.div', {
		display: 'block',
	})
	
	
} else {
	gsap.to('.div', {
		display: 'none',
	})
}






// Scr0ll Trigger Animation
gsap.registerPlugin(ScrollTrigger);
// First Section
let firstSection = document.querySelector('.first-section')

gsap.from(firstSection.firstElementChild, {
	ScrollTrigger: {
		trigger: firstSection,
		start: "top 50%",
	},
	y: 200,
	opacity: 0,
	duration: 1
})
gsap.from(firstSection.children[1], {
	ScrollTrigger: {
		trigger: firstSection,
		start: "top 50%",
	},
	y: 100,
	opacity: 0,
	duration: 1
})

let subs = document.querySelectorAll('.pop-up')
let subDiv = gsap.utils.toArray(subs)
let minor = document.querySelectorAll('.sub-divs')
let minors = gsap.utils.toArray(minor)

subDiv.forEach(element => {
	gsap.from(element.children, {
		scrollTrigger: {
			trigger: element.children,
			start: 'top 100%',
		},
		markers: true,
		y: 200,
		opacity: 0,
		duration: 1,
		stagger: {
			each: 0.3
		}
	})
});
minors.forEach(element => {
	gsap.from(element.children, {
		scrollTrigger: {
			trigger: element.children,
			start: 'top 100%',
		},
		markers: true,
		y: 200,
		opacity: 0,
		duration: 1,
		stagger: {
			each: 0.3,
		}
	})
});


// Navigation Menu

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

// Sliders
let slideContent = document.querySelectorAll(".sub-divs");
let prev = document.querySelectorAll("#prev");
let next = document.querySelectorAll("#next");
let counter = document.querySelectorAll("#counter");
let total = document.querySelectorAll("#total");
let subCounter = document.querySelectorAll(".counter");
let subTotal = document.querySelectorAll(".total");

for (let i = 0; i < 5; i++) {
  total[i].innerHTML = "0" + slideContent[i].children.length;
  let x = 1;
  counter[i].innerHTML = "0" + x;
  subCounter[i].innerHTML = counter[i].innerHTML;
  subTotal[i].innerHTML = total[i].innerHTML;

  next[i].addEventListener("click", () => {
    if (slideContent[i].children.length > 3 || screenWidth <= 800) {
      slideContent[i].appendChild(slideContent[i].children[0]);
      x = x + 1;
      if (x > slideContent[i].children.length) {
        x = 1;
      }
      counter[i].innerHTML = "0" + x;
      subCounter[i].innerHTML = counter[i].innerHTML;
      subTotal[i].innerHTML = total[i].innerHTML;
      gsap.from(slideContent[i].children, {
        x: 500,
        opacity: 0,
        duration: 0.5,
      });
    } else {
      null;
    }
  });
  prev[i].addEventListener("click", () => {
    if (slideContent[i].children.length > 3 || window.screen.availWidth <= 800) {
      slideContent[i].prepend(
        slideContent[i].children[slideContent[i].children.length - 1]
      );
      x = x - 1;
      if (x == 0) {
        x = slideContent[i].children.length;
      }
      counter[i].innerHTML = "0" + x;
      subCounter[i].innerHTML = counter[i].innerHTML;
      subTotal[i].innerHTML = total[i].innerHTML;

      gsap.from(slideContent[i].children, {
        x: -500,
        opacity: 0,
        duration: 0.5,
      });
    } else {
      null;
    }
  });
}
