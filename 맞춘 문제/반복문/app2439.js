let input = Number(require('fs').readFileSync('app2439.txt').toString())


let l 
for(let i = 1; i< input+1; i++) {
    let z = []
    for(let f = 1; f< input-i+1; f++){
        z.push(' ')
    }
    for(let f = 1; f< i+1; f++){
        z.push('*')
    }

    l = z.join('')
    console.log(l)
}



