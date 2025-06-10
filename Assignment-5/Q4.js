// Create a deepcopy of a object

function deepClone(obj){
    //Base case
    if(obj == null || typeof(obj) !== 'object'){
        return obj;
    }

    //Handle arrays
    if(Array.isArray(obj)){
        let copy = [];
        for(let item of obj){
            copy.push(deepClone(item));
        }
        return copy;
    }

    //Handle objects
    let copy = {};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            copy[key] = deepClone(obj[key]);
        }
    }
    return copy;
}

let original = {
    name: "Alice",
    details: {
      age: 25,
      hobbies: ["reading", "gaming"]
    }
};

let copy = deepClone(original);
console.log(copy);