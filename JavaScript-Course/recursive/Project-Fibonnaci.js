
//create a fibonacci using iteration

function fibs(n){//8
  let count = [0, 1];
for (let i = 2; i < n; i++){
 count.push(count[i - 1] + count[i - 2]);
}
  return count;
}
console.log(fibs(8));




//create a fibonacci using recursive

function fibs(n){//8
  if (n === 2){ // stop at 2 cuz 0,1
    return [0, 1];
  }

  else{
  let previous = fibs(n-1); //get previous array first, so we can add the last two numbers in the array e.g 8-1 = 7, so we get the array of 7 numbers, then we add the last two numbers in that array to get the next number in the sequence  
let next = previous[previous.length - 1] + previous[previous.length - 2]; //add the last two numbers in the array to get the next number in the sequence
  previous.push(next); //push the next number to the array
  return previous;
}
}
console.log(fibs(8));



