function d(n) {
    let sum = 0 ;

    
        for(let i = 0; i<n.toString().length; i++){

            let yes = (Math.floor(n/10**(i)))%10
            sum += yes             
        }

        return (sum+ n)
}



let range = 10000

let selfNumbers = new Array(range+1).fill(true)

for(let i = 0; i<= range; i++){
    selfNumbers[d(i)] = false
}

for(let i = 0; i<=range; i++) {
    if (selfNumbers[i]===true) {
        console.log(i)
    }
}





