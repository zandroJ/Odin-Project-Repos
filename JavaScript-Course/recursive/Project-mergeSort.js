function mergeSort(arr,l,h){
    if(l < h){ //if there is more than one element
        let mid = Math.floor((l + h) / 2); //find the mid point
        mergeSort(arr,l,mid); //sort the left half
        mergeSort(arr,mid+1,h);//sort the right half
        merge(arr, l, mid, h);//merge the two halves
    }
}
function merge(arr, l, mid, h) {
    let i = l;        // pointer for left half
    let j = mid + 1;  // pointer for right half
    let temp = [];    // where the merged result goes

    while(i <= mid && j <= h) { //if both halves have elements
       if(arr[i] < arr[j]) { //compare elements from both halves
            temp.push(arr[i]); //put smaller element into temp
            i++;
        } else {
            temp.push(arr[j]); //put smaller element into temp
            j++;
        }
    }

    // put remaining left elements into temp
    while(i <= mid) {
        temp.push(arr[i]);
        i++;
    }

    // put remaining right elements into temp
    while(j <= h) {
        temp.push(arr[j]);
        j++;
    }

    // copy temp back into arr
    for(let k = 0; k < temp.length; k++) {
        arr[l + k] = temp[k];
    }
}

let arr = [3, 2, 1, 13, 8, 5, 0, 1];

mergeSort(arr, 0, arr.length - 1);

console.log(arr);
