let word = "Hello World"
//lower the case
let wordLowerCase = word.toLocaleLowerCase()
//spit into array
let wordInArray = wordLowerCase.split("")

let letter_H = ""
let letter_E = ""
let letter_L = ""
let letter_O = ""
let letter_ = ""
let letter_W = ""
let letter_R = ""
let letter_D = ""

for(let i=0; i < wordInArray.length; i++){
    if (wordInArray[i] === "h"){
        letter_H = Number(letter_H) + 1
    } else if (wordInArray[i] === "e"){
        letter_E = Number(letter_E) + 1
    } else if (wordInArray[i] === "l"){
        letter_L = Number(letter_L) + 1
    } else if (wordInArray[i] === "o"){
        letter_O = Number(letter_O) + 1
    } else if (wordInArray[i] == " "){
        letter_ = (letter_) + 1
    } else if (wordInArray[i] === "w"){
        letter_W = Number(letter_W) + 1
    } else if (wordInArray[i] === "r"){
        letter_R = Number(letter_R) + 1
    } else if (wordInArray[i] === "d"){
        letter_D = Number(letter_D) + 1
    }
}

console.log()
console.log("Huruf H ada : " + letter_H)
console.log("Huruf E ada : " + letter_E)
console.log("Huruf L ada : " + letter_L)
console.log("Huruf O ada : " + letter_O)
console.log("Spasi ada : " + letter_)
console.log("Huruf W ada : " + letter_W)
console.log("Huruf R ada : " + letter_R)
console.log("Huruf D ada : " + letter_D)