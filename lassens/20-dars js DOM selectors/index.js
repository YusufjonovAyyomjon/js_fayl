// js selectorlar

//  1 usul - class orqali html ni chaqirish 
// let box = document.querySelector(".box");

//  2 usul - teg orqali html elementini chaqirish 
// let box = document.querySelector("div");

// 3 usul - barcha class va idlarni arrayda chaqirish
// let boxes = document.querySelectorAll(".box");

// // 4 usul - htmldagi id bilan berilgan elementni olish #
// let box = document.getElementById("box");

// 5 usul - htmldagi elementlarni class boyicha arrayda chaqirib olish 
//  let box = document.getElementsByClassName("box");


// DOM manipulation - js dan domga tasir qilish , ozgartirish

// textContent - html element malumotlarini ozgar tirish

// innerHTML - elementlarni malumotlarini ozgartirish yoki html element berish

// style - html malumotlarini style xossasiga ozgartirish

// createElement - js da turib html element yaratish

// appenChild - js dagi elementlarni htmlga biriktirish


// // const text = document.querySelector(".text")
// const parent = document.querySelector(".parent")


// text.textContent="oxford"
// text.innerHTML=`<i> xayr maktab</i>`

// console.log(text);



const parent = document.querySelector(".parent");
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr.length; i++) {
    const el = document.createElement("div");
    el.textContent = arr[i];

    if (arr[i] % 2 === 0) {
        el.style.color = "red";
    } else {
        el.style.color = "blue";
    }

    parent.appendChild(el);
}


