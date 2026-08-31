function copySorted(arr) {
  return arr.slice().sort();//slice method to make a copy of an arr, sort method sorts the copied arr in place(alpabetical order)
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted );
alert( arr );