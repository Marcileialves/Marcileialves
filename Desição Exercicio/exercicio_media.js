import letsGo from "readline-sync";
let nTurma = letsGo.questionInt("Digite o número da turma:") 
let contAluno = 0
let soma = 0
while(true){
    contAluno++
    let contBim = 1
    let snota = 0
    if (contAluno <= nTurma ){
        while (contBim <= 4){
            let nota = letsGo.questionInt(`Digite a nota do ${contBim}° Bimestre:`)
            snota += nota
            contBim++
        }
        let media = (snota) / 4
        console.log(`A média do aluno ${contAluno} é: ${media.toFixed(2)}.`)
        soma += media
    
    }
    else{
        console.log(`A nota da média da turma é:${soma/nTurma}.`)
        break
    }
    
}