//const funcoes_matematicas = require('./funcoes_matematicas');
import * as funcoes_matematicas from './funcoes_matematicas.js' ;

//Exemplo de uso
const resultadoSoma = funcoes_matematicas.soma(5, 3);
console.log(`Resultado da soma: ${resultadoSoma}`);

 const resultadoSubtracao = funcoes_matematicas.subtrai(10, 4);
 console.log(`Resultado da subtração: ${resultadoSubtracao}`);

 const resultadoMultiplicacao = funcoes_matematicas.multiplica(6, 7);
 console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`);

 const resultadoDivisao = funcoes_matematicas.divide(20, 4);
 console.log(`Resultado da divisão: ${resultadoDivisao}`);

//const calculadora_idade = require('./calculadora_idade');
import * as calculadora_idade from './calculadora_idade.js' ;
//Exemplo de uso
const idadeLucas = calculadora_idade.idade('Lucas', 2024, 2000);
console.log(idadeLucas);