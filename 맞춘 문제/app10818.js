let input = require('fs').readFileSync('input10818.txt').toString();

// \n 줄바꿈(엔터) \r , \t 스페이스

input = input.split(`\n`)

const inputOne = +input[0]
let inputTwo = input[1]
let inputTwoNumberArray = []

inputTwo = inputTwo.split(` `)

for (let i=0 ; i<inputOne; i++) {
    inputTwoNumberArray.push(Number(inputTwo[i]))
}

let max = inputTwoNumberArray[0]
let min = inputTwoNumberArray[0]

for(let i=0; i<inputOne; i++ ){
    if(max<inputTwoNumberArray[i]){
        max = inputTwoNumberArray[i]
    }
    if(min>inputTwoNumberArray[i]){
        min = inputTwoNumberArray[i]
    }
}

console.log(`${min} ${max}`)


