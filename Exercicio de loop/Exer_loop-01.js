import letsGo from "readline-sync"
let num = letsGo.questionInt("Digite um número?:")
let valor = 0
while (num <= 10){
    valor++
    console.log(`${num} x ${valor} = ${num *valor}`)
    if (valor == 10){
        break
    }
}