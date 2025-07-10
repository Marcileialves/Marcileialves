
import { efetuarCalculoIMC,validarParametro,retornarStatusIMC } from '../CalculadoraIMC.js';
import express from 'express';
const app =  express()

app.get('/', (req,res) =>{
    let peso = req.query.peso;
    let altura = req.query.altura;
    let imc = efetuarCalculoIMC(peso,altura);
    if(validarParametro(peso) && validarParametro(altura)){
        let status= retornarStatusIMC(imc);
        let json =({imc:imc,status:status});
        res.json({json});
    }
    else{
        res.status(400).json({Erro: 'Peso e altura inválido'})
    }
});

app.listen(8080, ()=> {
    let data= new Date()
    console.log("servodor iniciado em:" +data)
});