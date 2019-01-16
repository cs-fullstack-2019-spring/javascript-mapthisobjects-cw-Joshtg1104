// #### MAP
//
// 1. Use .map to create a new array of objects where each object has a property
// for ```petnumber``` and ```pettype``` based on the elements in the array.
//     Print the new array of objects.
//     ```


let arr = ["dog", "cat", "pig", "hamster"];
var newPet = arr.map(function (num, idx)
{
    let pet_objects = [];

    pet_objects.petNumber = idx;
    pet_objects.petType = num;

    return pet_objects;
}
);
console.log(newPet);


// let array = [1, 2, 3];
// var objarray = array.map(function(num, idx){
//     let newObj = {};
//
//     newObj.ndx = idx;
//     newObj.val = num;
//
//     return newObj;
// }
