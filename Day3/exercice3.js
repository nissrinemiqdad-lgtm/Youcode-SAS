let text = "I LOVE APPLES"
let motSupprimer = "APPLES"
let remplacant = "BANANAS"

let textRemplacant = text.slice(0 , text.length - motSupprimer.length)
console.log(textRemplacant + remplacant)