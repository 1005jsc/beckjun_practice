let input = require('fs').readFileSync('input2292.txt').toString()

input = parseInt(input)


let i = 1

let sum = 1



do{
    i++;
    sum = sum + i*6 -6 

    if(input === 1){
        i = 1
    }

}while(input>sum)

console.log(i)
// console.log(sum)

