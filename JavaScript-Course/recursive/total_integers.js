// function totalIntegers(arr, obj) {
//     let count = 0;
//   for (let i = 0; i < arr.length || i < Object.values(obj).length; i++) {
//     if (Array.isArray(arr[i]) || typeof thing === 'object') { 
//       count += totalIntegers(arr[i]);
//     } else if (typeof arr[i] === 'number') {
//       count++;
//     }
//   }
//   return count;
// }

function totalIntegers(arr) {
  let count = 0;

  if (Array.isArray(arr)) { // is it an array?
    for (let i = 0; i < arr.length; i++){ //loop through the array
    count += totalIntegers(arr[i]); // add the count of integers in the current element to the total count
    }
   
  }
  else if (typeof arr === 'object') { // is it an object?
    const value = Object.values(arr); // get the values of the object
    for (let i = 0; i < value.length; i++){// loop through the values of the object
    count += totalIntegers(value[i]); // add the count of integers in the current value to the total count
    }
    
  }

  else if (typeof arr === 'number') {// is it a number?
    count++; // increment the count of integers
  }

  return count;
}

console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]));

// totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // returns 7
// totalIntegers({ a: 1, b: { a: [5, 10], b: 11 } }); // returns 4