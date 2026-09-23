let panier = [
    { name : "chemise" , price : 170 , quantity : 3},
    { name : "pantalon", price : 100 , quantity : 2},
    { name : "chal" , price : 70 , quantity : 5 },
    { name : "chaussure" , price : 20 , quantity : 4}
]
function sommedepanier(arr){
    let somme = 0
    for (let i = 0;i<arr.length;i++){
        somme = somme + (arr[i].price * arr[i].quantity)
    }
    return somme 
}
console.log(sommedepanier(panier))