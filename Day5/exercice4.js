let personnes = [
    {name : "houda" , age : 18},
    {name : "Israe" , age : 20 },
    { name : "AZIZA" , age : 13 },
]
function personneAgée (Arr){
    let plusAgée = Arr[0]
    for(i=0;i<Arr.length;i++){
        if(plusAgée.age<Arr[i].age){
            plusAgée = Arr[i];
        }
    }
    return plusAgée.name

}
console.log(personneAgée(personnes))