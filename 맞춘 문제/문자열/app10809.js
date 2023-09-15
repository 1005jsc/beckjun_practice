let input = require('fs').readFileSync('input10809.txt').toString()


input= input.split('')


const alphabetArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']


let answer = new Array(26)
for(let i = 0; i<answer.length; i++){
    answer[i]=-1
}


input.forEach((value, index) => {
    for(let i = 0 ; i<26; i++){
        if(value === alphabetArr[i]){
           if(answer[i] === -1){
               answer[i]= index

           }else{
               continue
           }
           
        }
    }

})




console.log(answer.join(' '))




//////////////평가


// const input = require("fs").readFileSync("/dev/stdin").toString();

// const result = [];

// for (let i = 97; i <= 122; i++) {
//   result.push(input.indexOf(String.fromCharCode(i)));
// }

// console.log(result.join(" "));


// forEach의 두번째 인자인 index를 굳이 파서 해주는 것 보다 indexOf를 쓰는게 훨씬 깔끔했다 




