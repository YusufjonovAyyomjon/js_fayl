let arr1 =[1,2,3,4,5]
let arr2 =[6,7,8,9,10]

let arr3 = [].concat(arr1,arr2);
let newArr= arr3.splice(3,6);

let juftYigindi = 0;
let toqYigindi = 0;

for (let num of newArr) {
    if (num % 2 === 0) {
        console.log(`${num} — juft son`);
        juftYigindi += num;
    } else {
        console.log(`${num} — toq son`);
        toqYigindi += num;
    }
}
console.log(arr3);
console.log(juftYigindi);
console.log(toqYigindi);


console.log(newArr);


