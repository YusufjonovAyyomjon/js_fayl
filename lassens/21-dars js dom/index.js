let box = document.querySelector(".myinput")
let box2 = document.querySelector(".mybutton")
let list = document.querySelector(".list")

// click - button ustiga bosilganda ishlaydi
// mouseenter - button ustida oborganda ishlaydi
// mouseout  - button chiqqanda ishlaydi
// mousemowe  - button utida  yurganda ishlaydi
// addEventListener- elementga qandaydir hodisa
//  (event) bolganda funcsya ishlashi uchun

box2.addEventListener("click", buttonClick)

function buttonClick() {
let h1 =document.createElement("h1")
    
h1.style.color ="red"
h1.textContent=box.value;

list.appendChild(h1)

box.value=""
}