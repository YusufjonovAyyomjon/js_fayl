let number = 823;
console.log(number);
console.log(typeof number);
// ===============================

// let big = 2^53;
// console.log(big + 1n);
// console.log(typeof (big + 1));

// ==============================


let stirin = "oxford";
console.log(stirin);
console.log(typeof stirin);

// ==================================

console.log(true);
console.log(false);
console.log(typeof true);
console.log(typeof false);

//=========================================

let und;
console.log(und);
console.log(typeof und);

let nul = null;
console.log(nul);
console.log(typeof nul);

// =====================================

let sym = Symbol();
let sym2 = Symbol();

console.log(sym);
console.log(typeof sym);
console.log(sym2);
console.log(typeof sym2);

//==================================


let obj ={
    id : 65247,
    name : "eshmat",
    age : 15
}
console.log(obj);
console.log(typeof obj);


// ======================================


let ery = [ 1, "eshmat", "2025", true, { name : " eshmat"}, [2, 1]]
console.log(ery[3]);
console.log(typeof ery);


// ===================================


 function func() {
    console.log("function decloretion");
    console.log(typeof "function decloretion");
 }

 func()
 let func2 = function(){
    console.log("fu nction exspression");
 }

 func2 ()

 let func3 = ()=>{
    console.log("arrow function");
    
 }

 func3()