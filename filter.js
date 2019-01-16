// #### FILTER
// 2. Use ```.filter``` to create an array of pet objects that only holds the hamsters.
//
//     ```


let pets = [
{
  name: 'Spot',
  type: 'Hamster'
},
{
  name: 'Harry',
  type: 'Hamster'
},
{
  name: 'Kitty',
  type: 'Cat'
}
];

var petType = pets.filter(
    function(pet){

        return(pet.type==='Hamster')
    }
)
let hamsters = [petType];

console.log(hamsters);


// let ages = [12, 24, 50, 39, 90];
//
// function filterSenior(age){
//     return (age >= 50)
// }
// let over50 = ages.filter(filterSenior);
