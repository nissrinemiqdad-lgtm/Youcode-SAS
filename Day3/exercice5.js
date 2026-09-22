function inversetext (text){
    let nouveautext = "";
     for(i = text.length-1 ; i >= 0; i--) {
            nouveautext = nouveautext + text[i];
    }
    return nouveautext
}
console.log(inversetext("Nissrine"))