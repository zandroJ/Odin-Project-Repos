class Node{
constructor(data = null){
    this.leftChild = null;
    this.rightChild = null;
    this.storedData = data;
}
}

class Tree {
    constructor(array) {
        // Automatically build the tree when a new Tree instance is created
        this.root = this.buildTree(array, 0, array.length - 1);
    }

 buildTree(array,start, end){
if (start > end){
    return null;
}
const mid = Math.floor((start + end) / 2);
const node = new Node(array[mid]);

node.leftChild = this.buildTree(array, start, mid - 1);
node.rightChild = this.buildTree(array, mid + 1, end);
return node;
}
includes(value) {
    let current = this.root; // Start looking from the very top of the tree

    // Loop through the tree until we run out of nodes
    while (current !== null) {
        if (value === current.storedData) {
            return true; // Found it!
        }
        
        // If the value is smaller, go down the left branch
        if (value < current.storedData) {
            current = current.leftChild;
        } 
        // If the value is bigger, go down the right branch
        else {
            current = current.rightChild;
        }
    }

    return false; // Walked through the whole tree and didn't find it
}

insert(value) {
    const newNode = new Node(value);

    // Case 1: If the tree is completely empty, make this node the root
    if (this.root === null) {
        this.root = newNode;
        return;
    }

    let current = this.root;
    let parent = null;

    while (current !== null) {
        parent = current; // Keep track of the last valid node we visited

        // Requirement: If the value already exists, do nothing
        if (value === current.storedData) {
            return; 
        }

        // If the new value is smaller, head left
        if (value < current.storedData) {
            current = current.leftChild;
        } 
        // If the new value is larger, head right
        else {
            current = current.rightChild;
        }
    }

    // Once we hit null, attach the new node to the parent we saved
    if (value < parent.storedData) {
        parent.leftChild = newNode;
    } else {
        parent.rightChild = newNode;
    }
}

deleteItem(value){
    let current = this.root;
    let parent = null;

    //finding the node for deletion.
while(current !== null){
    if (value === current.storedData){
        break;
    }

parent = current;
if (value < current.storedData){
    current = current.leftChild;
}
else{
    current = current.rightChild;
}

}

//if value not found
if (current === null){
    return;
}
//no child case
if (current.leftChild === null && current.rightChild === null){

    //delete root
    if (parent === null){
        this.root = null;
    }
    //current is left child
    else if (parent.leftChild === current){
        parent.leftChild = null;
    }
    //current is right child
    else{
        parent.rightChild = null;
    }
}

//one child case
else if (current.leftChild === null || current.rightChild === null) {
const child = current.LeftChild !== null ? current.LeftChild : current.rightChild;
if (current.leftChild === null || current.rightChild === null){
    if (parent === null){
        this.root = child;
    }
    else if (parent.leftChild === null){
        parent.leftChild = child;
    }
    else{
        parent.rightChild = child;
    }
}
}
//two child case
else{
let successorParent = current;
let successor = current.rightChild;
while (successor.leftChild !== null) {
    successorParent = successor;
    successor = successor.leftChild;
}
        current.storedData = successor.storedData;
        if (successorParent.leftChild === successor) {
            successorParent.leftChild = successor.rightChild;
        } else {
            successorParent.rightChild = successor.rightChild;
        }
}


}

levelOrderForEach(callback) {
    // Make sure a callback function was provided
    if (typeof callback !== "function") {
        throw new Error("A callback function is required");
    }

    // Use a queue for breadth-first traversal
    let queue = [this.root];

    while (queue.length > 0) {
        // Take the first node out of the queue
        let current = queue.shift();

        // Callback gets the value, not the node
        callback(current.storedData);

        // Add children to the back of the queue
        if (current.leftChild !== null) {
            queue.push(current.leftChild);
        }

        if (current.rightChild !== null) {
            queue.push(current.rightChild);
        }
    }
}

inOrderForEach(callback){
    if (typeof callback !== "function"){
  throw new Error("A callback function is required");
    }

    //recursion for traversing
    const traverse = (node) =>{
        if(node === null){
            return;
        }
        traverse(node.leftChild);
        callback(node.storedData);
        traverse(node.rightChild);
    };
traverse(this.root);
}

preOrderForEach(callback){
    if (typeof callback !== "function"){
  throw new Error("A callback function is required");
    }

    //recursion for traversing
    const traverse = (node) =>{
        if(node === null){
            return;
        }
        traverse(node.leftChild);
        callback(node.storedData);
        traverse(node.rightChild);
    };
traverse(this.root);
}

postOrderForEach(callback){
    if (typeof callback !== "function"){
  throw new Error("A callback function is required");
    }

    //recursion for traversing
    const traverse = (node) =>{
        if(node === null){
            return;
        }
        traverse(node.leftChild);
        callback(node.storedData);
        traverse(node.rightChild);
    };
traverse(this.root);
}

height(value) {
    // Find the node containing the value
    let current = this.root;

    while (current !== null) {
        if (value === current.storedData) {
            break;
        }

        if (value < current.storedData) {
            current = current.leftChild;
        } else {
            current = current.rightChild;
        }
    }

    // Value wasn't found
    if (current === null) {
        return undefined;
    }

    // Recursively find the longest path to a leaf
    const getHeight = (node) => {
        if (node === null) {
            return -1;
        }

        const leftHeight = getHeight(node.leftChild);
        const rightHeight = getHeight(node.rightChild);

        return 1 + Math.max(leftHeight, rightHeight);
    };

    return getHeight(current);
}
depth(value) {
    // Find the node containing the value
    let current = this.root;
    let counter = 0;
    while (current !== null) {
        if (value === current.storedData) {
            return counter;
        }

        if (value < current.storedData) {
            current = current.leftChild;
            counter++;
        } else {
            current = current.rightChild;
            counter++;
        }
    }

    // Value wasn't found
    if (current === null) {
        return undefined;
    }

    }

isBalanced(){        
const checkBalance = (node) =>{
if (node === null) {
    return true;
}
        let heightLeft = height(node.leftChild) //this calculates the height 
        let heightRight = height(node.rightChild)
if ( Math.abs(heightLeft - heightRight) <= 1 ){
 return checkBalance(node.leftChild) && checkBalance(node.rightChild);

}
else{
    return false;
}

        } 
return checkBalance(this.root);

    }
}



