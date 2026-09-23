let produitenstock = [
    {name : "Gel douche" ,price : 15, instock : true},
    {name : "l'eau 0.25ml" , price : 2 , instock : true},
    {name : "Lait 1L" , price : 10 , instock : false},
    {name : "Lait 0.5L" , price : 5 ,instock : true}
]
function produitinstock (arr){
    let produitdestock = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i].instock === true){
            produitdestock.push(arr[i]);
        }
    }
    return produitdestock;
}
console.log(produitinstock(produitenstock))