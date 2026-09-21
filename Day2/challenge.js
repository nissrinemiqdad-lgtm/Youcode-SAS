var text = " bonjour maman "
var count = 0 ; 
var nombertotal = (text.length)  
for(let letter of text){
    if(letter === "a" || letter === "o" || letter === "i" || letter === "u" || letter === "e"){
        count++;
    }
}
console.log(count)
return((count*text.length)%100) = result 
console.log(result)


