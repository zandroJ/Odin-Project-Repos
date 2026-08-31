function filterRangeInPlace(arr,a,b){
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val < a || val > b) {
      arr.splice(i, 1);//remove the element at index i
      i--; // Adjust index after removal
    }
  }
}
// This function filters the array in place, removing elements that are not within the range [a, b].


let arr = [5, 3, 8, 1];
filterRangeInPlace(arr,1,4);
alert(arr);