/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

let arr = [1, 3, 5]
console.log(`${arr.length}`);
// while(arr){
//   console.log(arr.reverse());
// }



let orders = [
    { id: "A1232345", product: "Wireless Mouse", quantity: 1 },
    { id: "A1232351", product: "Coca-Cola can, 250ml", quantity: 6 },
    { id: "A1231111", product: "HD Webcam", quantity: 1 },
]

console.log(`${orders.length}`);


let arrayOfAnimals = [
    "Dog", "Cat", "Mouse", "Llama", "Llama", "Duck", "Alligator"
]
// console.log(`${indexOf(arrayOfAnimals.length-1)}`);
for(let i = 0; i < orders.length; i++){
  if(i === arrayOfAnimals.length-1){
    console.log(arrayOfAnimals[i]);
    // console.log(arrayOfAnimals.indexOf(i));
  }
}
