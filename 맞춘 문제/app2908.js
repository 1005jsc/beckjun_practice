let input = require('fs').readFileSync('input2908.txt').toString()


input = input.split(' ')

if(parseInt(input[0].split('').reverse().join('')) >= parseInt(input[1].split('').reverse().join(''))){
    console.log(parseInt(input[0].split('').reverse().join('')))
}else{
    console.log(parseInt(input[1].split('').reverse().join('')))
}



