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
console.log(`Marcas de carros:  ${marcasCarros}`) // interpolando o java script.
let usuario; // colocar a variavel sem o valor, vai dar um endefinido 
console.log(usuario);// sem o valor da um erro.
let num = 0; // para não dar o not number precisa adicionar um zero a variavel.
console.log(num + 10);// soma da variavel.
let n = null; // valor nulo é tratado como um zero, na string não
console.log(n + 1) // já sai o erro.
const aula = "DADO"; // não dá para mudar um número que está em uma constante. Defenindo uma constante.
// ---------------------------------------------------------------------------------
//peso dividido por altura ao quadrado IMC

let nome = "Marcilei";
let idade= 16;
console.log('Olá meu nome é' , nome, "E tenho",idade,"Anos");
// ------------------------------------------------------
let str = "gato";
console.log("Maiuscula", str.toLowerCase);
console.log("Minuscula", str.toUpperCase);

let g = "teste";
console.log("Tipo da variavel:" + typeof g);

let altura = 1.80;
let peso = 80
let calculo = peso/ ( altura * altura)
console.log('IMC: ', calculo.toFixed(2))

