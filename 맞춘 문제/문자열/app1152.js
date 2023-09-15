let input = require('fs').readFileSync('input1152.txt').toString().trim()


input = input.split(' ')


for(let i = 0; i<input.length; i++) {
    if(input[i] === ''){
        input.splice(i, 1)
        i--;
    }
}





console.log(input.length)