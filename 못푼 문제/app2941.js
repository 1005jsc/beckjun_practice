let input = require('fs').readFileSync('input2941.txt').toString()




const croatian = ['c=', 'c-', 'dz=','d-','lj','nj','s=','z=']






for(let yoyo of croatian){
    input = input.split(yoyo).join('q')
}

console.log(input.length)




