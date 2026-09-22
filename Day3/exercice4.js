let text = "level"
let a = 0
let b = text.length-1

while( a < b ){
    if(text[a] != text[b]){
        console.log("n'est pas palindrome")
        return;
    }
    a++
    b--
}
console.log("est palindrome")