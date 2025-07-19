let users = [
    { id: 7632, name: "Sardor", age: 27 },
    { id: 5263, name: "Alisher", age: 44 },
    { id: 9472, name: "Dilnoza", age: 30 },
  ];
let sortAge = users.sort((a, b) => a.age - b.age);
console.log(sortAge);
//javob: { id: 7632, name: 'Sardor', age: 27 },
//       { id: 9472, name: 'Dilnoza', age: 30 },
//       { id: 5263, name: 'Alisher', age: 44 }

let sortName = users.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortName);

//javob: { id: 5263, name: 'Alisher', age: 44 },
//       { id: 9472, name: 'Dilnoza', age: 30 },
//       { id: 7632, name: 'Sardor', age: 27 }

let sortId = users.sort((a, b) => a.id - b.id);
console.log(sortId);

//javob: { id: 5263, name: 'Alisher', age: 44 },
//       { id: 7632, name: 'Sardor', age: 27 },
//       { id: 9472, name: 'Dilnoza', age: 30 }



let users2 = [
    { name: "Ali", status: 1 },
    { name: "Vali", status: 0 },
    { name: "Sardor", status: 1 },
  ];
  
let Users = users2.filter(user2 => user2.status === 1);
  console.log(Users);
  