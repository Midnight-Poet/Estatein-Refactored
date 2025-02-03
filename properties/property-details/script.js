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


// SLide show
let littleImg = document.querySelector('.show-img')
let realImg = document.querySelector('.display')
let indicators = document.querySelectorAll('.indicators')

let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.previous')

// Percentage calc
let percentage = value => {
	return littleImg.clientWidth * value / 100
}

let x = 0

nextBtn.addEventListener('click', () => {
    x += 1
    gsap.utils.toArray(littleImg.children).forEach(element => {
        element.className = ''
    })
	gsap.utils.toArray(indicators).forEach(element => {
        element.className = ''
    })
    if (x == littleImg.children.length) {
        x = 0
    }
    littleImg.children[x].className = "present"
	// present-indicator
	indicators[x].classList += " present-indicator"
    realImg.children[0].src = littleImg.children[x].src

    if (x == littleImg.children.length - 1) {
        realImg.children[1].src = littleImg.children[0].src
    } else {
        realImg.children[1].src = littleImg.children[x + 1].src

    }

	if (screenWidth <= 800) {
		littleImg.scrollBy(percentage(24.5), 0)
		if (littleImg.children[0].className == 'present') {
			littleImg.scrollTo(0, 0)
		}
	}

    let tl = gsap.timeline()
    tl.from(realImg.children[0], {
        opacity: 0,
        filter: 'blur(33px)',
        duration: 0.5
    }).from(realImg.children[1], {
        opacity: 1,
        filter: 'blur(33px)',
        duration: 0.3
    })

    
})

gsap.utils.toArray(littleImg.children).forEach(element => {
	element.addEventListener('click', () => {
		gsap.utils.toArray(littleImg.children).forEach(element => {
			element.className = ''
		})
		element.className = 'present'
		console.log(element.elementCount);

		
		realImg.children[0].src = element.src
		realImg.children[1].src = element.nextElementSibling.src
		// x =
		let tl = gsap.timeline()
		tl.from(realImg.children[0], {
			opacity: 0,
			filter: 'blur(33px)',
			duration: 0.5
		}).from(realImg.children[1], {
			opacity: 1,
			filter: 'blur(33px)',
			duration: 0.3
		})
	})
})

prevBtn.addEventListener('click', () => {
    x -= 1

	gsap.utils.toArray(littleImg.children).forEach(element => {
        element.className = ''
    })
	gsap.utils.toArray(indicators).forEach(element => {
        element.className = ''
    })

    if (x == -1) {
        x = littleImg.children.length - 1
    }
    littleImg.children[x].className = "present"

	// present-indicator
	indicators[x].classList += " present-indicator"

    realImg.children[0].src = littleImg.children[x].src

    if (x == littleImg.children.length - 1) {
        realImg.children[1].src = littleImg.children[0].src
    } else {
        realImg.children[1].src = littleImg.children[x + 1].src

    }

	if (screenWidth <= 800) {
		littleImg.scrollBy(-percentage(24.5), 0)
		if (littleImg.children[littleImg.children.length - 1].className == 'present') {
			littleImg.scrollTo(percentage(1000), 0)
		}
	}

    let tl = gsap.timeline()
    tl.from(realImg.children[0], {
        opacity: 0,
        filter: 'blur(33px)',
        duration: 0.3
    }).from(realImg.children[1], {
        opacity: 1,
        filter: 'blur(33px)',
        duration: 0.3
    })

})



console.log();

