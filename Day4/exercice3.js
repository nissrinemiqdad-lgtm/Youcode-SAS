function trouverValue(tableau,valeur){
    for(i=0; i<tableau.length ;i++){
        if(valeur == tableau[i]){
            return true;
        }
    }
    return false
}
    
console.log(trouverValue(["salut","bonjours","hello"],"salut"))
