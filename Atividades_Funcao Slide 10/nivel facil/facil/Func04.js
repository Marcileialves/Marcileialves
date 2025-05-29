function caculador(num,porc){
    let resultado = (num * porc) / 100;
    return `resultado: ${resultado} \n${porc}% de ${num} é igual a ${resultado}`;
}
console.log(caculador(100,10));
