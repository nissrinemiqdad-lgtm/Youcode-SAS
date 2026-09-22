function tableau1(Array1){
    let resultat = []
    for(i=0;i<Array1.length;i++){
        if(!resultat.includes(Array1[i])){
         resultat.push(Array1[i]);
        }
    }
    return resultat;
} 
console.log(tableau1([4,1,4,2,5,1,8,9,8]))