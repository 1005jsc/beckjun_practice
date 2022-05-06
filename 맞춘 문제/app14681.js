let input = require('fs').readFileSync('input14681.txt').toString()




input = input.split('\n')






let newInput = []
for(let i = 0 ; i<input.length;i++){
    newInput.push(parseInt(input[i]))
}


let x1 = newInput[0]
let y1 = newInput[1]

const yes = (x,y) => {
    if(x>0&&y>0){
        return 1
    }else if(x<0&&y>0) {
        return 2
    }else if(x<0&&y<0) {
        return 3
    }else {
        return 4
    }
}

console.log(yes(x1,y1))


