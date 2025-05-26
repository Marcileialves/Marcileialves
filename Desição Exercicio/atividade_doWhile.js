import rl from "readline-sync"
let nAleatório = Math.floor(Math.random() * 100 ) +1;
let tentativa;

do{
    tentativa =  rl.questionInt("tente acertar um número:")
    if (tentativa === nAleatório){
        console.log("Parabém você acertou o número.")
        break
    }
    else{
        if (tentativa < nAleatório){
            console.log("Número digitado é Menor do que o número!, tente novamente.")

            }
        else{
            console.log("Número digitado é Maior do que o número,tente novamente.")
            }

        }
    }while(tentativa != nAleatório){
    }
    
    

