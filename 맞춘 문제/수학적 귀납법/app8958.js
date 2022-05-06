let input = require('fs').readFileSync('input8958.txt').toString().split('\n')




for(let i = 1; i< +input[0]+1; i++) {

    let yes = input[i].toString().split('')
    if(yes[yes.length-1]==='\r'){
        yes.pop()
    }


    let total = 0
    let a = 0
    for(let q = 0; q< input[i].split('').length; q++){
        
        if(yes[q]=== 'O'){
            a = a + 1
            total = total + a
        }else{
            a = 0
        }
    }
    console.log(total)

}




