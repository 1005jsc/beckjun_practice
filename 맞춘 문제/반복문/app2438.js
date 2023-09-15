let input = Number(require('fs').readFileSync('app2438.txt').toString())


let k = []
let l 
for(let i = 1; i< input+1; i++) {
    k.push('*')
    l = k.join('')
    console.log(l)
}



