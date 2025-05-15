// let narxlar = {
//     telefon: 200,
//     laptop: 800,
//     quloqchin: 50
// }
// let mahsulot = prompt("mahsulot nomini kiriting")
// let soni = +promot("mahsulot nomi")
// let chegirma = prompt("chegirma bormi")
// let summ = 0
// for (let i = 0; i <= soni; i++) {
//     summ += narxlar[mahsulot]
//     if (chegirma === "ha" && summ > 300) {
//         summ *= 0.9
//     }
// }
// console.log(summ)

let age = +prompt("yoshingizni kriting")
let student = prompt("talabamisiz")
narxi = null
if (age < 18 || student === "ha"){
    narxi = 5000
}
else {
    narxi = 10000
}
console.log("sizdan" + narxi + "so'm bo'ldi");