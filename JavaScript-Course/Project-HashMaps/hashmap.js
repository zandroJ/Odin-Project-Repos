class HashMap  {
    constructor(size = 16){
        this.bucket = new Array(size);
    this.size = 0;
    this.capacity = size;
}
    #hash(key){
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++){
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return hashCode % this.capacity;
        
    }

    set(key,value){
       const bucketIndex = this.#hash(key);
       let bucket = this.bucket[bucketIndex];
        if (!bucket) {
        this.bucket[bucketIndex] = [];
        bucket = this.bucket[bucketIndex];

    }
       for (let i = 0; i < bucket.length; i++){
        const [storedKey,storedValue] = bucket[i];
        if(storedKey === key){
            bucket[i][1] = value;
            return;
        }
       }
bucket.push([key,value]);
this.size++;
if (this.size / this.capacity > 0.75) {
        this.#resize();
    }
    }

    get(key){
       const bucketIndex = this.#hash(key);
    
    // Step 2: Go directly to that bucket
    const bucket = this.bucket[bucketIndex];
    
    if (!bucket) return null; // Bucket is empty

    // Step 3: Traverse the bucket to find the exact key match
    for (let i = 0; i < bucket.length; i++) {
        const [storedKey, storedValue] = bucket[i];
        if (storedKey === key) {
            return storedValue; // Found it!
        }
    }
    
    return null; // Key doesn't exist 

        }

 has(key) {
    const bucketIndex = this.#hash(key);
    const bucket = this.bucket[bucketIndex];

    if (!bucket) return false;

    for (let i = 0; i < bucket.length; i++) {
        const [storedKey] = bucket[i];

        if (storedKey === key) {
            return true;
        }
    }

    return false;
}

remove(key) {
    const bucketIndex = this.#hash(key);
    const bucket = this.bucket[bucketIndex];

    if (!bucket) return false;

    for (let i = 0; i < bucket.length; i++) {
        const [storedKey] = bucket[i];

        if (storedKey === key) {
            bucket.splice(i, 1);
            this.size--;
            return true;
        }
    }

    return false;
}

length() {
    return this.size;
}
clear() {
    this.bucket = new Array(this.capacity);
    this.size = 0;
}
keys() {
    const keys = [];

    for (let i = 0; i < this.bucket.length; i++) {
        const bucket = this.bucket[i];

        if (!bucket) continue;

        for (let j = 0; j < bucket.length; j++) {
            keys.push(bucket[j][0]);
        }
    }

    return keys;
}


    

// values() returns an array containing all the values.
values() {
    const values = [];

    for (let i = 0; i < this.bucket.length; i++) {
        const bucket = this.bucket[i];

        if (!bucket) continue;

        for (let j = 0; j < bucket.length; j++) {
            values.push(bucket[j][1]);
        }
    }

    return values;
}


// entries() returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]
entries() {
    const entries = [];

    for (let i = 0; i < this.bucket.length; i++) {
        const bucket = this.bucket[i];

        if (!bucket) continue;

        for (let j = 0; j < bucket.length; j++) {
            entries.push(bucket[j]);
        }
    }

    return entries;
}

#resize() {
    const oldEntries = this.entries();

    this.capacity *= 2;
    this.bucket = new Array(this.capacity);
    this.size = 0;

    for (const [key, value] of oldEntries) {
        this.set(key, value);
    }
}
}

