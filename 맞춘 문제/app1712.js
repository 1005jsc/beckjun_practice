let input = require('fs').readFileSync('input1712.txt').toString().split(' ')


let a = input[0]
let b = input[1]
let c = input[2]

let value 

if(c-b <= 0 ){
    value = -1
}else{
    if(a/(c-b)%10=== 0){
        value = a/(c-b) + 1
    }else{
        value = Math.ceil(a/(c-b))
    }
}

console.log(value)





