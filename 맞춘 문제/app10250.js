let input = require('fs').readFileSync('input10250.txt').toString()




input = input.split('\n')


let H
let W
let N

for(let i = 1 ; i<=input[0]; i++){
    let yes = input[i].split(' ')
    H= yes[0]
    W= yes[1]
    N= yes[2]

    let a 
    let b 


    if(N%H === 0){

        a= H
        b=Math.floor(N/H)
        if(b<10){
            b=`0${b}`
            
        }

    }else{
        
        a= N%H
        b=Math.floor(N/H) +1
        if(b<10){
            b=`0${b}`
            
        }
    }
    console.log(`${a}${b}`)

}


