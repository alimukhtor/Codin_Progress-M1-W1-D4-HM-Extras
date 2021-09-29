const writeHeader = function(title){
  console.log(`\n\n >-------------------== [${title.toUpperCase()}]==-----------------------<`);
}

writeHeader("TASK 1: ")
/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/
let arr = [1, 3, 5]
let arr2 = []
for(let i = arr.length-1; i >= 0; i--){
  arr2.push(arr[i])
}
console.log(arr2);
//==========================================================

writeHeader("TASK 2: ")
/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/
let maxNumsOfArray = [12, 4, 23, 3, 56]
let maxNumber = maxNumsOfArray[0]
for(let i = 0; i < maxNumsOfArray.length; i++){
  if(maxNumsOfArray[i] > maxNumber){
    maxNumber = maxNumsOfArray[i]
  }
}
console.log(maxNumber);

writeHeader("TASK 3: ")
/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

let minNumbersOfArray = [12, 4, 23, 3, 56]
let minNumber = minNumbersOfArray[0]
for(let i = 0; i < minNumbersOfArray.length; i++){
  if(minNumbersOfArray[i] < minNumber){
    minNumber = minNumbersOfArray[i]
  }
}
console.log(minNumber);
// ======================================================

writeHeader("TASK 4: ")
/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

let oddNumbers = [12, 4, 23, 3, 56]
let counter = []
for(let i = 0; i < oddNumbers.length; i++){
  if(oddNumbers[i]%2 === 0){
    counter.push(oddNumbers[i])
  }
}
console.log(counter);
// ================================================

writeHeader("TASK 5: ")
/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/
let evenNumbers = [12, 4, 23, 3, 56]
for(let i = 0; i < oddNumbers.length; i++){
  if(evenNumbers[i]%2 === 0){
    let result = evenNumbers.splice(i, 1)
  }
}
console.log(evenNumbers);
// ===========================================
writeHeader("TASK 6: ")
/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/
strings = strings.map(string1 => string1.replace(/[aeiou]/g, ''));
console.log(strings);
// ===========================================

writeHeader("TASK 7: ")
/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/
let numericalValues = [12, 4, 23, 3, 56]
for(let i = 0; i < numericalValues.length; i++){
  numericalValues[i]++
}
console.log(numericalValues);
// ======================================================

writeHeader("TASK 8: ")
/* EXTRA 8
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/
let lengthOfStrings = ["strive", "is", "great"]
for(let i = 0; i < lengthOfStrings.length; i++){
  if(lengthOfStrings[i] = lengthOfStrings[i].length){
  }
}
console.log(lengthOfStrings);
