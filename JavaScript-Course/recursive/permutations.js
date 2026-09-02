function permutation(arr){
    if(arr.length === 0){
    return [[]];
    };

    let result = [];
        for (let i = 0; i < arr.length; i++){ //loop through the array
        let current = arr[i]; 
        let newArr = arr.slice(0, i).concat(arr.slice(i + 1));//slide the array to the left and right of the current element
        let permutations = permutation(newArr); //recursively call the function with the new array
    for(let j = 0; j < permutations.length; j++){ //loop through the permutations
        let putCurrent = [current].concat(permutations[j]); //add the current element to the front of the permutation
        
    result = result.concat([putCurrent]); //result is the concatenation of the current element and the permutation

    console.log("current:", current);
console.log("permutation:", permutations[j]);
console.log("putCurrent:", putCurrent);

    }
}
return result;
}

console.log(permutation([1, 2, 3]));