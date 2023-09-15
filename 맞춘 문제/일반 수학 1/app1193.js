let input = require('fs').readFileSync('index1193.txt').toString()

input = parseInt(input) 


let i = 0

let k
do{
    i = i+1;

   

}while(input>(i*(i+1)/2))

if(i%2===0){
    let  d = input - i*(i-1)/2 -1
    k = `${(1+d)}/${(i-d)}`
    console.log(d)

    }else{
    let  d = input - i*(i-1)/2 -1
    k = `${(i-d)}/${(d+1)}`
}


console.log(i)
console.log(k)