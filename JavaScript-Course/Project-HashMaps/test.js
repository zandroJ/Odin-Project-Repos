const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log(test);
console.log(test.length());
console.log(test.capacity);


// Test overwriting
test.set('apple', 'green');
test.set('banana', 'blue');

console.log(test.get('apple'));
console.log(test.get('banana'));
console.log(test.length());
console.log(test.capacity);

// Trigger resize
test.set('moon', 'silver');

console.log(test.length());
console.log(test.capacity);

// Test other methods
console.log(test.get('dog'));
console.log(test.has('dog'));
console.log(test.has('pizza'));

console.log(test.remove('dog'));
console.log(test.has('dog'));

console.log(test.keys());
console.log(test.values());
console.log(test.entries());

// Test clear
test.clear();

console.log(test.length());
console.log(test.keys());
