let input = require('fs').readFileSync('input5622.txt').toString()



input = input.split('')

let go = [['a','b','c', '3'], ['d','e','f','4'],['g','h','i','5'], ['j','k','l','6'], ['m','n','o','7'], ['p','q','r','s','8'], ['t','u','v','9'], ['w','x','y','z','10']]


let kokoko = 0
input.forEach((letter) => {

    for(let i = 0; i<go.length; i++){
        if(go[i].includes(letter.toLowerCase())){
            kokoko = kokoko + parseInt(go[i][go[i].length-1])

        }


    }



})


console.log(kokoko)
