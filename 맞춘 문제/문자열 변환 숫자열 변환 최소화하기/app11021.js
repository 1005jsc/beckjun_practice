let input = require('fs').readFileSync('input11021.txt').toString()


input = input.split('\n')

const arrayLength = +input[0]

let k = []


for(let i = 1; i<arrayLength+1 ; i++){
    let d = []
    let l = []
    d = input[i].split(' ')
    l = d.map((value) => {return parseInt(value)})
    k.push(l)



    
}

for(let i = 0; i< arrayLength ; i++){
    let d = []
    
    d = k[i]

    const sum = d.reduce((a,b) => a+b)
    console.log(`Case #${i+1}: ${sum}`)
}





