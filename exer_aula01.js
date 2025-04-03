let valor = 13.141516;
let text = "bem vindo ao java script";
let bool = true;

console.log(valor.toFixed(2));// um método para deixar casas após a  virgula 
console.log(text.toUpperCase());// utiliza deixar o texto string em uma caixa alta
console.log(bool.toString());
console.log('Tipo da variavel:' + typeof valor); // utiliza o typeof para retornar o tipo da variavel. 
console.log('Tipo da variavel:'+ typeof text);// utiliza o typeof para retornar o typo da variavel.
console.log('Tipo da variavel bool:' + typeof bool);// utiliza o typeof para retornar o tipo da variavel.

let nomes = ["Variavel 01 ", 2]; // Meio de colocar mais atributos em uma mesma variavel.
let marcasCarros = ["Corola","Palio"]; // criado mais uma variavel que ultiliza varios valores.
marcasCarros.push("Toyota"); // colocando mais um valor na varialvel.
console.log("Tipos de elementos na variavel marcasCarros:" + marcasCarros.length); // mostrando quanto tipos de valores que tem no arrey.
console.log("Total de letras:" + marcasCarros[0].length)
console.log(marcasCarros); // imprimindo as marcas de carros.



