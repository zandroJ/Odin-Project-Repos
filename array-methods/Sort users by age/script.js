function sortByAge(users){
 users.sort((a, b) => a.age - b.age);
}
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ pete, john, mary ];
sortByAge(users);
// now: [john, mary, pete]
alert(users[0].name); // John
// alert(users[1].name); // Mary
// alert(users[2].name); // Pete


