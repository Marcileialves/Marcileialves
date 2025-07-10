function efetuarCalculoIMC(peso, altura) {
    return (peso /(altura*altura)).toFixed(2)
}



function retornarStatusIMC(imc) {
    let status;
    if(imc < 18.5 && imc < 24.9){
        status = "abaixo do peso"
    }
    else if (imc> 18.5 && imc <24.9){
        status = "Peso  Normal"
    }
    else if(imc >= 24.9 && imc < 30){
        status = "Acima do peso"
    }
    else{
        status = "Obeso"
    }

    return status;

    
}
function validarParametro(parametro){
    if (parametro){
        if( isNaN(parametro)){
            return false
        }
        else{
            return true
        }
    }
    else{
        return false
    }
}
export {efetuarCalculoIMC, retornarStatusIMC, validarParametro}

