// let a = [1,2,3,4]
// let b=a.forEach((value,index,a)=>{
//         console.log(value,index,a);

    
    
    
//     })
//     console.log(b);


// let arr = [5,8,6,9,10,20,30,3,7,1,0,2,4]  
// let newArr=arr.sort((a,b)=> a-b)//har-xil sonlarni ketmaketlikda tartib blan joylaydi
// console.log(newArr);


// let arr2 = ["olma","banan","kiwi","ananas"]  ;

// let newArr = arr2.sort((a,b)=> a.localeCompare(b)) // strinlarni alfavid boyicha locleCopare kerak boladi sort da
// console.log(newArr);

// let arr2 = ["olma","banan","kiwi","ananas"];
// let newArr=arr2.every((value)=>{   // every hammasini tekshradi va true false qaytaradi arry qiymat lerini hammasida shu soz yoki harf borligini tekshradi 
//     return value.includes("a")
// })
// console.log(newArr);

// let arr2 = ["olma","banan","kiwi","ananas"];
// let newArr=arr2.some((value)=>{   // some array qiymatlarida shu soz yoki harf bormi deb qidiradi bittasida bosayam true qiymat qay taradi ya'ni kamida bittasi to'g'ribolsaham ishlaydi 
//     return value.includes("a")
// })
// console.log(newArr);

// let arr = [1,2,[3,4,[5,6,[7,8]]]];
// let newArr = arr.flat(Infinity   // flat ichma-ich nested array larni ochishda ishlatilinadi
//     )
//     console.log(newArr);

// let arr = [1,2,[3,4,[5,6,[7,8]]]];
// let newArr = arr.flatMap((value)=>{ // flatga oxshaydi bunda shart tekshirishimiz mumkin
//     if(Array.isArray(value)){
//         console.log(value.flat(Infinity));
        
//     }else{
//         console.log(value);
        
//     }
// })
// console.log(newArr);

// let arr = [1,2,3,4];
// let newArr = arr.fill([10,20,30],1,3) // fill da  malumot orniga boshqa malumot solishindig mumkin
// console.log(newArr);

// let arr = [1,2,3,4];
// let newArr = arr.copyWithin(0,2)// copyWithin array ozidan copy oladi va boshqa joyga ko'chiradidi.      array ni ozidan copy olib va array boshqa yeriga kochirish shingiz mumkin  
// console.log(newArr);
