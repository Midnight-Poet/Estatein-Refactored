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

gsap.registerPlugin(ScrollTrigger);

gsap.from(".img1", {
  scrollTrigger: {
    // toggleActions: "play reverse play reverse",// onEnter onLeave onENterBack onLeaveBack
    trigger: ".first-section",
  },
  opacity: 0,
  // duration: 1,
  delay: 0.5,
  filter: "blur(33px)",
  ease: "power1.in",
});

gsap.from(".txt1", {
  scrollTrigger: {
    trigger: ".first-section",
    toggleActions: "play reset play reset", // onEnter onLeave onENterBack onLeaveBack
  },
  x: 200,
  opacity: 0,
  duration: 2,
  ease: "elastic",
});
gsap.from(".sdiv", {
  scrollTrigger: {
    trigger: ".first-section",
    toggleActions: "play reset play reset",
  },
  delay: 0.5,
  x: -300,
  ease: "elastic",
  opacity: 0,
  duration: 2,
  stagger: {
    amount: 1,
    from: 2,
  },
});
gsap.from(".div-col-1", {
  scrollTrigger: {
    trigger: ".second-section",
    start: "top 75%",
    toggleActions: "play reverse play reverse",
    end: "top 50%",
    scrub: 2,
  },
  y: 100,
  opacity: 0,
  stagger: {
    amount: 0.8,
    each: 0.2,
    from: 0,
  },
});

let star = document.querySelectorAll(".star");
let sub = document.querySelectorAll(".sec-obj");

// 08162596865

// gsap.utils.toArray(star).forEach((star) => {
//   gsap.set(star.children, {
//     y: 50,
//     x: -200,
//     scale: 2,
//   });
//   gsap.set('.div-col-2', {
//     y: 50,
//     opacity: 0
//   });
  

//   let tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: star,
//       start: "top 55%",
//       end: "bottom 35%",
//     //   pin: true,
//     //   pinSpacing: 10,
//       markers: true,
//     //   scrub: 3
//     },
//   });
//   tl.to(star.children, {
//     x: 0,
//     duration: 1,
//     stagger: {
//       amount: 0.5,
//       from: 0,
//     },
//   }).to(star.children, {
//     y: 0,
//     scale: 1,
//     rotate: -360,
//     duration: 1,
//     stagger: {
//       amount: 0.5,
//       from: 0,
//     },
//   }).to(star.children, {
//     rotate: -360,
//     repeat: 2,
//     duration: 1
//   }).to('.div-col-2', {
//     opacity: 1,
//     y: 0,
//     duration: 1
//   })


// });

for (let i = 0; i < star.length; i++) {
  gsap.set(star[i].children, {
    y: 50,
    x: -200,
    scale: 2,
  });
  gsap.set(sub[i].children[1], {
    y: 50,
    opacity: 0
  });
  gsap.set(sub[i].children[3], {
    y: 50,
    opacity: 0
  });
  gsap.set(sub[i].children[2].children, {
    y: 50,
    opacity: 0
  });
  
  
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: star[i],
      start: "top 55%",
      end: "bottom 35%",
      toggleActions: "play none play reverse",
},
  });
  tl.to(star[i].children, {
    x: 0,
    // duration: 1,
    stagger: {
      amount: 0.5,
      from: 0,
    },
  }).to(star[i].children, {
    y: 0,
    scale: 1,
    rotate: -360,
    // duration: 1,
    stagger: {
      amount: 0.5,
      from: 0,
    },
  }).to(sub[i].children[1], {
    opacity: 1,
    y: 0,
    duration: 0.7
  }).to(sub[i].children[2].children, {
    y: 0,
    opacity: 1,
    stagger: {
      amount: 0.6,
	    each: 0.2,
      from: 0
    }
  }).to(sub[i].children[3], {
    // scrollTrigger: sub[i].children[3],
    duration: 0.4,
    opacity: 1,
    y: 0
  }).to(star[i].children, {
    rotate: 360,
    duration: 10,
    repeat: -1
  })

 
}
gsap.from(sub[star.length], {
	scrollTrigger: {
		trigger: sub[star.length], 
		start: "top 75%",
      	end: "bottom 35%",
	},
	opacity: 0,
	y: 50
})

gsap.from('footer', {
	scrollTrigger: {
		trigger: 'footer', 
		start: "top 75%",
      	end: "bottom 35%",
	},
	opacity: 0,
	y: 50
  })

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
