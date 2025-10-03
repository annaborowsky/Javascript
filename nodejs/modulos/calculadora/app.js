//const funcoes_matematicas = require('./funcoes_matematicas');
import {soma, subtrai, multiplica, divide} from './modulos/funcoes_matematicas.js' ;

//Exemplo de uso
const resultadoSoma =soma(5, 3);
console.log(`Resultado da soma: ${resultadoSoma}`);

 const resultadoSubtracao = subtrai(10, 4);
 console.log(`Resultado da subtração: ${resultadoSubtracao}`);

 const resultadoMultiplicacao = multiplica(6, 7);
 console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`);

 const resultadoDivisao = divide(20, 4);
 console.log(`Resultado da divisão: ${resultadoDivisao}`);

//const calculadora_idade = require('./calculadora_idade');
import * as calculadora_idade from './modulos/calculadora_idade.js' ;
//Exemplo de uso
const idadeAnna = calculadora_idade.idade('Anna', 2000, 2025);
console.log(idadeAnna);