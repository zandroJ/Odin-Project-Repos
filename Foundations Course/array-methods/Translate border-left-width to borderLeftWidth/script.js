function camelize(str){
    return str.split('-').map((word, index) => {//split the str into array of words, and the index of the words
        //map through the array of words and return the word    
        if (index === 0) { //if the index is 0, return the word as it is
            //this is to keep the first word in lowercase
            return word;
        }
        return word.charAt(0).toUpperCase() + word.slice(1);//return the word with the first letter capitalized and the rest of the word as it is
        })
        .join('');
}

console.log(camelize("background-color")); // "backgroundColor"