let input = require('fs').readFileSync('input2941.txt').toString()


console.log(input)


const croatian = ['c=', 'c-', 'dz=','d-','lj','nj','s=','z=']

let y=0
for(let i = 0; i<input.length; i++){
    if(croatian.includes(input.substring(i, i+2))){
        y++;
        console.log(input.substring(i, i+2))
    }else{
        
    }
        
}
console.log(y)







