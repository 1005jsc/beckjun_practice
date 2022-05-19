let input = require('fs').readFileSync('input2869.txt').toString()

input = input.split(' ')

let inputNum = input.map((value) => {return parseInt(value)})

const A = inputNum[0]
const B = inputNum[1]
const V = inputNum[2]


let k = Math.ceil(1+ (V-A)/(A-B))
















// if(V%(A-B)===0){
//     k = Math.ceil((V/(A-B)*2-3)/2)
// }else{
//     k= Math.ceil(V/(A-B))
// }


console.log(k)
