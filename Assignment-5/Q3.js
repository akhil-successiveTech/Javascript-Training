// Remove key from array of object

function removeKey(){
    let obj = {
        name: "Akhil",
        age: 21,
        city: "Ghaziabad",
        id: 1
    }

    delete obj.id;
    console.log(obj);
}

removeKey();