let navbar = document.querySelector('nav')
let hideMenu = document.querySelector('.close-btn')
let showMenu = document.querySelector('.menu-btn') 

let screenWidth

setInterval(() => {
    screenWidth = window.innerWidth
    if (screenWidth > 800) {
        gsap.set('.res-nav', {
            display: 'none'
        })
    }
}, 100)

showMenu.addEventListener('click', () => {
    gsap.set('.res-nav', {
        x:500,
        display: 'none'
    })
    gsap.to('.res-nav', {
        x: 0,
        display: 'block',
        duration: 0.5
    })
})

hideMenu.addEventListener('click', () => {
    gsap.to('.res-nav', 
    {
        x: 500,
        display: 'none',
        duration: 0.5
    })
})
gsap.registerPlugin(ScrollTrigger)
gsap.from('.img1', {
    scrollTrigger: {
        trigger: '.first-section',
    },
    opacity: 0,
    duration: 1,
    delay: 0.5,
    filter: 'blur(33px)',
    ease: 'power1.in'
})

gsap.from('.txt1', {
    scrollTrigger: '.first-section',
    x: 200,
    opacity: 0,
    duration: 2,
    ease: 'elastic',
    yoyo: true
})
gsap.from('.sdiv', {
    scrollTrigger: '.first-section',
    delay: 0.5,
    x: -300,
    ease: 'elastic',
    opacity: 0,
    duration: 2,
    stagger: {
        amount: 1,
        each: 0.33,
        from: 2,
    }
})
gsap.from('.div-col-1', {
    scrollTrigger: {
        trigger: '.second-section',
        start: 'top 85%',
        end: 'bottom',
        yoyo: true
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: {
        amount: 0.8,
        each: 0.2,
        from: 0,
    }
})

let content = document.querySelectorAll('.slide1')


// // let slideContent = document.querySelectorAll(".sub-divs")
// // let prev = document.querySelectorAll("#prev")
// // let next = document.querySelectorAll("#next")
// // let counter = document.querySelectorAll("#counter")
// // let total = document.querySelectorAll("#total")
// // let subCounter = document.querySelectorAll(".counter")
// // let subTotal = document.querySelectorAll(".total")


// // let navpop = document.querySelector(".menu")
// // let closeNav = document.querySelector(".close")
// // let nav = document.querySelector(".nav")


// // navpop.addEventListener('click', () => {
// //     if (nav.className === "nav") {
// //         nav.className += " navget"
// //     } else {
// //         nav.className = "nav"
// //     }
// // })
// // closeNav.addEventListener('click', () => {
// //     if (nav.className === "nav navget") {
// //         nav.className = "nav"
// //     } else {
// //         nav.className ="nav navget"
// //     }
// // })



// // for (let i = 0; i < 5; i++) {

// //     total[i].innerHTML = "0" + slideContent[i].children.length
// //     let x = 1
// //     counter[i].innerHTML = "0" + x
// //     subCounter[i].innerHTML = counter[i].innerHTML
// //     subTotal[i].innerHTML = total[i].innerHTML

// //     next[i].addEventListener('click', ()=> {
        
// //         slideContent[i].appendChild(slideContent[i].children[0])
// //         x = x + 1
// //         if (x > slideContent[i].children.length) {
// //             x = 1
// //         }
// //         counter[i].innerHTML = "0" + x
// //         subCounter[i].innerHTML = counter[i].innerHTML
// //         subTotal[i].innerHTML = total[i].innerHTML
        
// //     })
// //     prev[i].addEventListener('click', () => {
// //         slideContent[i].prepend(slideContent[i].children[slideContent[i].children.length - 1])
// //         x = x - 1
// //         if (x == 0) {
// //             x = slideContent[i].children.length
// //         }
// //         counter[i].innerHTML = "0" + x
// //         subCounter[i].innerHTML = counter[i].innerHTML
// //         subTotal[i].innerHTML = total[i].innerHTML
// //     }) 
// // }