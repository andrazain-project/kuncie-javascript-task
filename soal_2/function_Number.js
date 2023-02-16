function number(inputNumber) {

    if (inputNumber >= 1 && inputNumber <= 10){
        console.log("SATUAN")
    } else if (inputNumber >= 11 && inputNumber <= 19){
        console.log("BELASAN")
    } else if (inputNumber >= 20 && inputNumber <= 99) {
        console.log("PULUHAN")
    } else if (inputNumber >= 100 && inputNumber <= 999) {
        console.log("RATUSAN")
    } else if (inputNumber >= 1000 && inputNumber <= 9999) {
        console.log("RIBUAN")
    } else if (inputNumber >= 10000 && inputNumber <= 99999) {
        console.log("PULUH RIBUAN")
    } else {
        console.log("INPUT TIDAK VALID")
    }

    return inputNumber;

}

module.exports = {
    number
}