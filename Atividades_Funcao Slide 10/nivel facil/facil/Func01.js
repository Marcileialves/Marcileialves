import letsGO from "readline-sync"

let string = letsGO.question("Digite um texto:")
function caixaAlta(string){
    return string.toUpperCase()
}
console.log(caixaAlta(string))
