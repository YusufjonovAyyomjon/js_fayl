// let student = {
//     firstName: "Eshmat",
//     lastName: "Toshmatov",
//     age: 20,
//     course: "Frontend",
//     func: function () {
//         console.log(this.firstName, this.lastName, this.age);
//     }
// };

// student.func()






// let data = {
//     name: "Phone",
//     model: "iPhone",
//     price: 700,
//     quantity: 8
// };

// let umumiy = data.price * data.quantity
// console.log(`umumiy hisob ${umumiy}`);




// let user = {
//     id: 1,
//     name: "Eshmat",
//     age: 65,
//     status: "Nafaqa oluvchi",
//     child: {
//         id: 2,
//         name: "Toshmat",
//         age: 30,
//         status: "talaba"
//     },
// };

// cloneUser = user;
















let user = {
  id: 1,
  name: "Eshmat",
  age: 65,
  status: "Nafaqa oluvchi",
  child: {
    id: 2,
    name: "Toshmat",
    age: 30,
    status: "Talaba",
  },
};

let cloneUser = structuredClone(user);

cloneUser.child.age = 45


console.log(user.child.age);
console.log(cloneUser.child.age);
