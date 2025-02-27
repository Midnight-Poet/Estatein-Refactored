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
let firstSection = document.querySelector('.hero-section')

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
let minor = document.querySelectorAll('.sub-sec')
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