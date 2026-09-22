function LeplusGrand(Array){
    let number = 0
    for(i=0; i<Array.length; i++){
        if(Array[i]>number){
            number = Array[i]
            
        }

    } return number
}
console.log(LeplusGrand([4,5,9,78,32]))
