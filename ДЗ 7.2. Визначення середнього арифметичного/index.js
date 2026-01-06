let array = ['a', 5, true, 23, undefined, 74]

let number = 0

let amountOfNumbers = 0

for(i = 0; i < array.length; i++){
    if(typeof array[i] === 'number'){
        number += array[i]
        amountOfNumbers++
    }
}
let arithmeticMean = number / amountOfNumbers
console.log(arithmeticMean)