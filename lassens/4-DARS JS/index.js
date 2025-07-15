
// let a = Number(prompt(" son kiriting:"));
// // if (a % 2){
//     //     console.log(`bu son toq ${a}` );
    
//     // }else{
//         //     console.log(`bu son juft ${a}` );
        
//         // }
// let a = Number(prompt("yilingizni kiriting:"));

// let b = 2025 - a;
// console.log(b);

// if (b >= 2 && b <= 6){
//     console.log("boqchada oqiysiz");
    
// }
// else if (b >= 7 && b <= 18){
//     console.log("maktabda oqiysiz");
    
// }
// else if (b >= 19 && b <= 30){
//     console.log("universtetda oqiysiz");
    
// }
// else if (b >= 31 && b <= 60){
//     console.log("ishlay sz");
    
// }
// else if (b >= 61){
//     console.log("nafaqaxo'r sz");
    
// }else{
//     console.log("notog'ri yosh kirittingi");
    
// }

let a = 10, b = 2, c =4;
let ortacha;


if(a>b && a<c){
    console.log(a,"ortacha");
    ortacha=a
}
else if(b>a && b<c){
    console.log(b,"ortacha");
    ortacha=b
}
else if(c>a && c<b){
    console.log(c,"ortacha");
    ortacha=c
}



else if(a<b && a>c){
    console.log(a,"ortacha");
    ortacha=a
}
else if(b<a && b>c){
    console.log(b,"ortacha");
    ortacha=b
}
else if(c<a && c>b){
    console.log(c,"ortacha");
    ortacha=c
}

console.log(ortacha);

