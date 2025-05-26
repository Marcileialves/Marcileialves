import letsGo from "readline-sync";
let nTurma = letsGo.questionInt("Digite o número da turma:") 

let soma = 0
for(i = 0; i <= nTurma + 1 ; i++){
    let nota1 = letsGo.questionFloat(`Digite a primeira nota do aluno ${nAluno}:`)
    let nota2 = letsGo.questionFloat(`Digite a segunda nota do aluno ${nAluno}:`)
    let nota3 = letsGo.questionFloat(`Digite a terceira nota do aluno ${nAluno}:`)
    let nota4 = letsGo.questionFloat(`Digite a quarta nota do aluno ${nAluno}:`)
    let media = (nota1 + nota2 + nota3 + nota4) / 4
    console.log(`A média do aluno ${nAluno} é: ${media.toFixed(2)}`)
    soma += media
    if (i === nTurma + 1){
        console.log(`A média geral da turma é: ${(soma / nTurma).toFixed(2)}`)
    }

}