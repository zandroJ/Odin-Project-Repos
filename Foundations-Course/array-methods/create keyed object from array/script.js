function groupById(array){
    return array.reduce((obj, value)=>{ //uses reduce to re-iterate the array, obj is the starting point aka accumulator, value is the current user
        obj[value.id] = value; //uses the user's id as key and assign the full user object as value.
        return obj;
    },{})
}

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

console.log(usersById);
/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/