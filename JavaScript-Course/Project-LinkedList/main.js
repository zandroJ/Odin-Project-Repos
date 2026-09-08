// A Node is one "box" in our linked list.
// It stores:
// 1. The actual value
// 2. A reference to the next Node
class Node {
  constructor(value) {
    this.value = value;

    // At first, this Node isn't connected to anything.
    // Later, this will point to another Node.
    this.nextNode = null;
  }
}


// The LinkedList manages all of our Nodes.
// It keeps track of where the list starts, ends,
// and how many Nodes are inside it.
class LinkedList {
  constructor() {

    // Points to the FIRST Node in the list.
    // null means the list is currently empty.
    this.headNode = null;

    // Points to the LAST Node in the list.
    // null because the list starts empty.
    this.tailNode = null;

    // Keeps track of how many Nodes are in the list.
    this.length = 0;
  }


  // =====================================================
  // APPEND
  // Add a new Node to the END of the list.
  // =====================================================

  append(value) {

    // Create a new Node containing the value.
    const newNode = new Node(value);

    // If there is no head, the list is empty.
    if (!this.headNode) {

      // The new Node is both the first...
      this.headNode = newNode;

      // ...and the last Node.
      this.tailNode = newNode;

    } else {

      // There is already something in the list.
      // Connect the current last Node to the new Node.
      this.tailNode.nextNode = newNode;

      // The new Node is now the last Node.
      this.tailNode = newNode;
    }

    // We added one Node, so increase the length.
    this.length++;
  }


  // =====================================================
  // PREPEND
  // Add a new Node to the BEGINNING of the list.
  // =====================================================

  prepend(value) {

    // Create the new Node.
    const newNode = new Node(value);

    // Make the new Node point to the current first Node.
    //
    // Example:
    // dog → cat
    //
    // becomes:
    // newNode → dog → cat
    newNode.nextNode = this.headNode;

    // The new Node is now the first Node.
    this.headNode = newNode;

    // If the list was empty, the new Node
    // is also the tail.
    if (this.tailNode === null) {
      this.tailNode = newNode;
    }

    // We added one Node.
    this.length++;
  }


  // =====================================================
  // SIZE
  // Return the number of Nodes in the list.
  // =====================================================

  size() {
    return this.length;
  }


  // =====================================================
  // HEAD
  // Return the first Node in the list.
  // =====================================================

  head() {
    return this.headNode;
  }


  // =====================================================
  // TAIL
  // Return the last Node in the list.
  // =====================================================

  tail() {
    return this.tailNode;
  }


  // =====================================================
  // AT
  // Return the Node at a specific index.
  // =====================================================

  at(index) {

    // Make sure the requested index actually exists.
    //
    // Example:
    // If length is 3, valid indexes are:
    // 0, 1, 2
    //
    // So index 3 doesn't exist.
    if (index < 0 || index >= this.length) {
      return null;
    }

    // Start at the first Node.
    let current = this.headNode;

    // Move through the list until we reach the
    // requested index.
    for (let i = 0; i < index; i++) {

      // Move to the next Node.
      current = current.nextNode;
    }

    // Return the Node we ended up on.
    return current;
  }


  // =====================================================
  // POP
  // Remove the LAST Node from the list.
  // =====================================================

  pop() {

    // If the list is empty, there is nothing to remove.
    if (this.headNode === null) {
      return null;
    }

    // Save the value of the Node we're removing.
    const removedValue = this.tailNode.value;

    // Special case:
    // If head and tail are the same Node,
    // there is only ONE Node in the list.
    if (this.headNode === this.tailNode) {

      // The list becomes empty.
      this.headNode = null;
      this.tailNode = null;

    } else {

      // Start at the beginning of the list.
      let current = this.headNode;

      // Walk through the list until we reach
      // the Node immediately BEFORE the tail.
      //
      // Example:
      // dog → cat → parrot
      //       ↑       ↑
      //    current   tail
      while (current.nextNode !== this.tailNode) {
        current = current.nextNode;
      }

      // Disconnect the old tail.
      current.nextNode = null;

      // The Node we found becomes the new tail.
      this.tailNode = current;
    }

    // One Node was removed.
    this.length--;

    // Return the value that was removed.
    return removedValue;
  }


  // =====================================================
  // CONTAINS
  // Check whether a value exists in the list.
  // =====================================================

  contains(value) {

    // Start at the first Node.
    let current = this.headNode;

    // Keep going while there is a Node.
    while (current) {

      // Check whether this Node contains
      // the value we're looking for.
      if (current.value === value) {
        return true;
      }

      // Move to the next Node.
      current = current.nextNode;
    }

    // We reached the end without finding it.
    return false;
  }


  // =====================================================
  // FIND INDEX
  // Find the index of a specific value.
  // =====================================================

  findIndex(value) {

    // Start at the first Node.
    let current = this.headNode;

    // Keep track of our current position.
    let index = 0;

    // Walk through the list.
    while (current) {

      // Check whether this Node contains
      // the value we're looking for.
      if (current.value === value) {

        // Return the position where we found it.
        return index;
      }

      // Move to the next Node.
      current = current.nextNode;

      // We moved one position forward.
      index++;
    }

    // We reached the end without finding the value.
    return -1;
  }


  // =====================================================
  // TO STRING
  // Turn the linked list into a readable string.
  // =====================================================

  toString() {

    // Start at the first Node.
    let current = this.headNode;

    // We'll store each value in this array.
    let values = [];

    // Walk through every Node.
    while (current) {

      // Add the current Node's value to the array.
      values.push(current.value);

      // Move to the next Node.
      current = current.nextNode;
    }

    // Turn:
    // ["dog", "cat", "parrot"]
    //
    // into:
    // "dog -> cat -> parrot"
    return values.join(" -> ");
  }
}


// =====================================================
// EXAMPLE USAGE
// =====================================================

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");

console.log(list.toString());
// "dog -> cat -> parrot"

console.log(list.size());
// 3

console.log(list.head().value);
// "dog"

console.log(list.tail().value);
// "parrot"

console.log(list.at(1).value);
// "cat"

console.log(list.contains("cat"));
// true

console.log(list.contains("fish"));
// false

console.log(list.findIndex("parrot"));
// 2

list.prepend("hamster");

console.log(list.toString());
// "hamster -> dog -> cat -> parrot"

list.pop();

console.log(list.toString());
// "hamster -> dog -> cat"
