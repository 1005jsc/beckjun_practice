let input = require('fs').readFileSync('input11720.txt').toString().split('\n')


let yes = input[1].split('')
let yes1= yes.map((value) => {return parseInt(value)}).reduce((a,b) => {return a+b})

console.log(yes1)

