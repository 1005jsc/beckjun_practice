const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString();
console.log(input)

input = input.split('\n') // \n 줄바꿈, \r 맨 앞으로 이동하라 

console.log(input)

const testCaseNum = +input[0]

console.log(testCaseNum)