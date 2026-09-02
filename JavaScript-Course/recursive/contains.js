function contains(object, value) {
for (let key in object){
        if((object[key] === value)){
        return true;
       }
    if (typeof object[key] === 'object' && object[key] !== null){
       if(contains(object[key], value)){
        return true;
       }
    
    }
}
    return false;
}

console.log(contains({ foo: { bar: "bar" } }, "bar"));
// contains({ foo: "foo" }, "bar") // false
// contains({ foo: { bar: "bar" } }, "bar") // true