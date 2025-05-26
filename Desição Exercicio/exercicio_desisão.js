import letsGo from "readline-sync"
let num = letsGo.question("Digite um numero?:")
let cont = 1
while(cont <= 10 ){
    console.log(` ${num} x ${cont} = ${num * cont}`)
    cont++
}
