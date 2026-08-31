function unique(arr) {
  let result = [];

  for (let str of arr) {//for of to iterate the strings inside the array
    if (!result.includes(str)) {// if the str of the arr is already not present in the result. it will be pushed on the result.
      result.push(str);
    }
  }

  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O