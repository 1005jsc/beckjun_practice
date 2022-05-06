let input = require('fs').readFileSync('input2675.txt').toString()


input = input.split('\n')

let arrayLength = +input[0]

for(let i = 1; i<=arrayLength;i++){
    let yes = input[i].toString().split(' ')
    let yo= parseInt(yes[0])
    let yoyo = yes[1].trim()
    let array1= []
    for(let i =0;i<yoyo.length;i++ ){
        for(let k=0; k<yo; k++){
            array1.push(yoyo[i])
        }
    }
    console.log(array1.join(''))

}
