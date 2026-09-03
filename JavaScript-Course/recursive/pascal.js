
//create a pascal

function pascal(n){//3
if (n === 0){ //base case
return [1];
}
  let previousRow = pascal(n-1); //get previous row first
  let newRow = [1]; //now rows starts with 1
 for (let i = 0; i < previousRow.length - 1; i++){ //add neighbouring numbers from previousRow
   newRow.push(previousRow[i] + previousRow[i+1]); //add the sum of the two numbers above it
   
 }
  newRow.push(1); //add 1 at the end of the row
return newRow;

}
console.log(pascal(3));// [3]


