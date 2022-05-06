let input = require('fs').readFileSync('input1157.txt').toString()

let array1 = []

for(let i = 0; i<input.length;i++) {
    array1.push(input[i].toUpperCase())
}

// console.log(array1)
let array2 = Array.from(new Set(array1))



let array3 = []
for(let i = 0; i<array2.length; i++) {
    let count=0
    for(let k = 0; k<array1.length; k++){
        if(array1[k] === array2[i]){
            count+=1
        }
        
    }
    // console.log(count)
    array3.push(count)
    
}







let array4 = []
for(let i =0; i<array3.length; i++){
    array4.push([array2[i],array3[i]])
}

let array5 = array4.sort((a,b) => {return b[1]-a[1]})


if(array2.length== 1){
    console.log(array2[0].toUpperCase())
}else{
    if(array5[0][1] === array5[1][1]){
        console.log('?')
    }else{
        console.log(array5[0][0])
    }
}







