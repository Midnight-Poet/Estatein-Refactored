let slideContent = document.querySelectorAll(".sub-divs")
let prev = document.querySelectorAll("#prev")
let next = document.querySelectorAll("#next")
let counter = document.querySelectorAll("#counter")
let total = document.querySelectorAll("#total")
let subCounter = document.querySelectorAll(".counter")
let subTotal = document.querySelectorAll(".total")


let navpop = document.querySelector(".menu")
let closeNav = document.querySelector(".close")
let nav = document.querySelector(".nav")


navpop.addEventListener('click', () => {
    if (nav.className === "nav") {
        nav.className += " navget"
    } else {
        nav.className = "nav"
    }
    // nav.appendChild(document.querySelector('.navget'))

    // nav.style.display = "block"
})
closeNav.addEventListener('click', () => {
    if (nav.className === "nav navget") {
        nav.className = "nav"
    } else {
        nav.className ="nav navget"
    }
})



for (let i = 0; i < 5; i++) {

    total[i].innerHTML = "0" + slideContent[i].children.length
    let x = 1
    counter[i].innerHTML = "0" + x
    subCounter[i].innerHTML = counter[i].innerHTML
    subTotal[i].innerHTML = total[i].innerHTML

    next[i].addEventListener('click', ()=> {
            
        slideContent[i].appendChild(slideContent[i].children[0])
        x = x + 1
        if (x > slideContent[i].children.length) {
            x = 1
        }
        counter[i].innerHTML = "0" + x
        subCounter[i].innerHTML = counter[i].innerHTML
        subTotal[i].innerHTML = total[i].innerHTML
        
    })
    prev[i].addEventListener('click', () => {
        slideContent[i].prepend(slideContent[i].children[slideContent[i].children.length - 1])
        x = x - 1
        if (x == 0) {
            x = slideContent[i].children.length
        }
        counter[i].innerHTML = "0" + x
        subCounter[i].innerHTML = counter[i].innerHTML
        subTotal[i].innerHTML = total[i].innerHTML
    }) 
}

// NAviagtion Settings


