let input = Number(require('fs').readFileSync('input2753.txt').toString());

const yoonnyon = () => {
    if(input%4===0){
        if(input%100!==0){
            
            return 1

        }else{
            if(input%400===0){
                return 1
            }else{

                return 0
            }
        }

    }else{
        return 0
    }
}


console.log(yoonnyon())

