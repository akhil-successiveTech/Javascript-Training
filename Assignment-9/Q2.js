const _ = require('lodash');

const original = {
    name : "Akhil",
    details : {
        age : 21,
        location : ["Ghaziabad", "Noida"]
    }
}

const copy = _.cloneDeep(original);
copy.details.age = 30;

console.log(copy.details.age);
console.log(original.details.age);