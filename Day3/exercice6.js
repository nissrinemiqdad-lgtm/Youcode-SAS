function compteurDeLettre (str,caractere){
    let compteurlettre = 0
    for(let i = 0 ; i < str.length ; i++){
        if(caractere == str[i])
            compteurlettre++

    } 
    return compteurlettre
}
console.log(compteurDeLettre("NISSRINE","N"))