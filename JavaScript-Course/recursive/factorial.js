//normal way
// function factorial(n){
//     for (let i = n - 1; i > 0; i--){
//         n *= i;
//     }
//     return n;
// }
// factorial(5);

//recursive way
function factorial(n){
  if (n>0){
    let yo = factorial(n-1);
    return yo*n;
  }
  else {
    return 1;
  }
}

console.log(factorial(5));