let input = require('fs').readFileSync('input4344.txt').toString()

input = input.split('\n')


for(let i = 1; i <= input[0]; i++) {
    const sum = input[i].split(' ').reduce((a,b) => Number(a)+Number(b) ) - Number(input[i][0])

    const average = sum/Number(input[i][0])

    let a = 0
    for(let o = 1; o<=input[i][0]; o++){
        if(input[i].split(' ')[o] > average) {
            a= a+1
        }

    }
    const yes = ((a/Number(input[i][0])*100).toFixed(3))


    console.log(yes + "%")


}







