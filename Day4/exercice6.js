function invercetableau (Array){
    for(i=0;i<Array.length/2;i++){
        let temp = Array[i]
        Array[i] = Array[Array.length - 1 - i]
        Array[Array.length -1 -i] = temp

    }
    return Array

} 
console.log(invercetableau([1,2,3,4,5]))