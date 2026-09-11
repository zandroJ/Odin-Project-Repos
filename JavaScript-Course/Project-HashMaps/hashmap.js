class HashMap {
    constructor(size = 16) {
        // The main array that holds all of our buckets.
        // Initially, all positions are empty (undefined).
        this.bucket = new Array(size);

        // Tracks how many key/value pairs are actually stored.
        this.size = 0;

        // Tracks how many buckets we currently have.
        this.capacity = size;
    }

    #hash(key) {
        // Turns a string key into a number (hash code).
        let hashCode = 0;

        // Prime numbers help distribute keys more evenly.
        const primeNumber = 31;

        // Go through every character in the key.
        for (let i = 0; i < key.length; i++) {
            hashCode =
                primeNumber * hashCode + key.charCodeAt(i);
        }

        // Convert the hash code into a valid bucket index.
        // The result will be between 0 and capacity - 1.
        return hashCode % this.capacity;
    }

    set(key, value) {
        // Figure out which bucket this key belongs to.
        const bucketIndex = this.#hash(key);

        // Get that bucket.
        let bucket = this.bucket[bucketIndex];

        // If the bucket doesn't exist yet, create it.
        if (!bucket) {
            this.bucket[bucketIndex] = [];

            // Make the local variable point to the new bucket.
            bucket = this.bucket[bucketIndex];
        }

        // Search the bucket for an existing key.
        // This is necessary because different keys can have
        // the same hash index (a collision).
        for (let i = 0; i < bucket.length; i++) {
            const [storedKey, storedValue] = bucket[i];

            // If the key already exists, update its value.
            if (storedKey === key) {
                bucket[i][1] = value;

                // Don't increase size because we didn't add
                // a new key/value pair.
                return;
            }
        }

        // The key didn't already exist,
        // so add a new [key, value] pair.
        bucket.push([key, value]);

        // Increase the number of stored entries.
        this.size++;

        // Check the load factor.
        // If more than 75% full, resize the HashMap.
        if (this.size / this.capacity > 0.75) {
            this.#resize();
        }
    }

    get(key) {
        // Find which bucket the key should be in.
        const bucketIndex = this.#hash(key);

        // Get that bucket.
        const bucket = this.bucket[bucketIndex];

        // If the bucket doesn't exist, the key isn't present.
        if (!bucket) return null;

        // Search through the bucket.
        for (let i = 0; i < bucket.length; i++) {
            const [storedKey, storedValue] = bucket[i];

            // If we found the key, return its value.
            if (storedKey === key) {
                return storedValue;
            }
        }

        // The key wasn't found.
        return null;
    }

    has(key) {
        // Find the correct bucket.
        const bucketIndex = this.#hash(key);
        const bucket = this.bucket[bucketIndex];

        // No bucket means the key isn't present.
        if (!bucket) return false;

        // Search through the bucket.
        for (let i = 0; i < bucket.length; i++) {
            const [storedKey] = bucket[i];

            // Found the key!
            if (storedKey === key) {
                return true;
            }
        }

        // Key wasn't found.
        return false;
    }

    remove(key) {
        // Find the correct bucket.
        const bucketIndex = this.#hash(key);
        const bucket = this.bucket[bucketIndex];

        // No bucket means there's nothing to remove.
        if (!bucket) return false;

        // Search through the bucket.
        for (let i = 0; i < bucket.length; i++) {
            const [storedKey] = bucket[i];

            // If we found the key...
            if (storedKey === key) {

                // Remove 1 item at index i.
                bucket.splice(i, 1);

                // One less key/value pair exists.
                this.size--;

                // Tell the caller that removal succeeded.
                return true;
            }
        }

        // Key wasn't found.
        return false;
    }

    length() {
        // Return the number of stored key/value pairs.
        return this.size;
    }

    clear() {
        // Create a completely new empty bucket array.
        // Keep the current capacity.
        this.bucket = new Array(this.capacity);

        // There are now zero stored entries.
        this.size = 0;
    }

    keys() {
        // Array that will contain all keys.
        const keys = [];

        // Go through every bucket.
        for (let i = 0; i < this.bucket.length; i++) {
            const bucket = this.bucket[i];

            // Skip empty buckets.
            if (!bucket) continue;

            // Go through every entry in the bucket.
            for (let j = 0; j < bucket.length; j++) {
                // [0] is the key.
                keys.push(bucket[j][0]);
            }
        }

        return keys;
    }

    values() {
        // Array that will contain all values.
        const values = [];

        // Go through every bucket.
        for (let i = 0; i < this.bucket.length; i++) {
            const bucket = this.bucket[i];

            // Skip empty buckets.
            if (!bucket) continue;

            // Go through every entry in the bucket.
            for (let j = 0; j < bucket.length; j++) {
                // [1] is the value.
                values.push(bucket[j][1]);
            }
        }

        return values;
    }

    entries() {
        // Array that will contain [key, value] pairs.
        const entries = [];

        // Go through every bucket.
        for (let i = 0; i < this.bucket.length; i++) {
            const bucket = this.bucket[i];

            // Skip empty buckets.
            if (!bucket) continue;

            // Add every [key, value] pair.
            for (let j = 0; j < bucket.length; j++) {
                entries.push(bucket[j]);
            }
        }

        return entries;
    }

    #resize() {
        // Save all existing entries before replacing
        // the old bucket array.
        const oldEntries = this.entries();

        // Double the number of buckets.
        this.capacity *= 2;

        // Create a new, larger empty bucket array.
        this.bucket = new Array(this.capacity);

        // Reset size because we're about to add
        // all the entries back into the new map.
        this.size = 0;

        // Add every old entry back using set().
        // This is important because the larger capacity
        // changes the hash indexes, so everything needs
        // to be rehashed.
        for (const [key, value] of oldEntries) {
            this.set(key, value);
        }
    }
}
