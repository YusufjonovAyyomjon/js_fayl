// let arr = [1,2,3,4,5,6,7,8,9,10];
// arr.forEach((value,index,arr)=>{
//     console.log(value,index);

// })
// let newArr=arr.map((value,index,arr)=>{
//     return "salom";

// })
// console.log(newArr);
// let newArr2=arr.filter((value,index,arr)=>{
//     return value;

// })
// console.log(newArr2);

// let sum = 0;
// arr.forEach((value,index,err)=>{
//     sum+=value;
// })
// console.log(sum);

//     let newArr=arr.map((value,index,arr)=>{
//             return value;

//         })
//         console.log(newArr);
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr2 = arr.filter((value, index, arr) => {
    return value % 2 === 0;

})
console.log(newArr2);
