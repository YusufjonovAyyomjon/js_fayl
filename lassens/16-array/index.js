
// 
// let arr = [1, 2, 3, 4, 5];
// let yigindi = 0;

// for (let i = 0; i < arr.length; i++) {
//   yigindi += arr[i];
// }

// console.log(" yig'indisi:", yigindi);

// let a = 13,b=12;
// a>b ? console.log("ha katta") : console.log("yoq kichik");

// let arr = [14, -8,3 ,-7,0,9,-1];

// for(let i = 0;i<arr.length;i++){
//     if (arr[i] >= 0) {
//        console.log(arr[i]) ;       
//     }
// }
// for (let i= -10;i<=-1;i++){
//     console.log(i);

// }

//reduce - reduce arraydagi qiymatlarni yigindisini qaytaradi

let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((a, b) => a + b, 0);{
    console.log(result);
  
}