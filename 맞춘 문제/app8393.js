// 파일 읽어오기 

// 하나의 숫자로 되어있을 경우
// require -> readFileSync -> string 아니면 number로 바꾸기



let input = Number(require('fs').readFileSync('input8393.txt'))
// let input = Number(require('fs').readFileSync('input8393.txt').toString())

let k 
let l = 0
for(let i=0; i<input+1; i++){
    k = i
    l = l + k 
    
}


console.log(l)