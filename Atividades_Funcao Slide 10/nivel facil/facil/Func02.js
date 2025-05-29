import letsGO from "readline-sync"
const num = letsGO.questionInt("Digite um número?:")
const Verifica = (num1) =>{ 
    if (num1 % 2 == 0){
        return "Par"
    }
    else{
        return "Impar"
    }
}
console.log(Verifica(6))

