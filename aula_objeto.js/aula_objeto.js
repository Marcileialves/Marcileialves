//exercicio número um.
let apartamento = {
    quartos: 2,
    tipo: "Apartamento",
    endereco: "Avenida Principal, 456-Centro",
    andar: 7
}

console.log(`A partamento com ${apartamento.quartos}, localizado no ${apartamento.andar} na ${apartamento.endereco}.`);

//Exercício número dois.

let produtoEmbalado = {
    Nome:"Laptop Hp",
    categoria:"Eletrônicos",
    peso:1.5,
    preco:3500.00
}
console.log(`O produto ${produtoEmbalado.Nome},da categoria ${produtoEmbalado.categoria}, pesando${produtoEmbalado.peso}kg, está a venda por R$:${produtoEmbalado.preco} reais.`)
//exercício número três.
class Imovel{
    constructor(Quartos,tipos,endereco){
    this.Quartos = Quartos
    this.tipos = tipos
    this.endereco = endereco }
    exibirInformacoes(){
        return `${this.tipos} com ${this.Quartos} Quartos no endereço:${this.endereco}.`
    }

}
let casa = new Imovel(4,"Casa","Rua da Amizade, 789 - Bairro Alegre N° 7979")
console.log(casa.exibirInformacoes())
let aprt = new Imovel(2,"Casa","Rua da Amizade, 789 - Bairro Alegre")
console.log(aprt.exibirInformacoes())
//Exercício número quatro.

class Veiculo{
    constructor (marca,modelo,ano){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }
    exibirInformação(){
        return `O veicúlo do ${this.modelo}, marca:${this.marca}, ano${this.ano}.`
    }

}

let carro = new Veiculo("Toyota","Corolla",2022)
console.log(carro.exibirInformação())

