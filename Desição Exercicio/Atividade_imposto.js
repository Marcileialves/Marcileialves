import Lest from "readline-sync"
for (let i = 1; i <= 10;i++){
    let nome = Lest.question(`Digite o nome da ${i} pessoa:`);
    let salario = Lest.questionFloat(`Digite o salário:`)
    let ir= 0
    if (salario <= 2100){
        ir = 0
    }
    else if(salario <= 2800){
        ir = salario * 0.075
    }
    else if (salario <= 3750){
        ir = salario * 0.15

    }
    else if (salario <= 4660){
        ir = salario * 0.225  

    }
    else if (salario > 4660){
        ir = salario *0.275
    }
    console.log(`Imposto a ser pago é de:${ir.toFixed(2)} Reais.`)
        


}