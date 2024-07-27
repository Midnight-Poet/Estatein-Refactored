let slideContent = document.getElementById("slide").children
let prev = document.getElementById("prev")
let next = document.getElementById("next")
let id = document.getElementById("id")
let total = document.getElementById("total")
total.innerHTML = "0" + slideContent.length
let x = 1
id.innerHTML = "0" + x

next.addEventListener('click', ()=> {
    document.getElementById("slide").appendChild(slideContent[0])
    
    x = x + 1
    if (x > slideContent.length) {
        x = 1
    }
    id.innerHTML = "0" + x
    
    
})
prev.addEventListener('click', () => {
    document.getElementById("slide").prepend(slideContent[slideContent.length - 1])
    x = x - 1
    if (x == 0) {
        x = slideContent.length
    }
    id.innerHTML = "0" + x
})

