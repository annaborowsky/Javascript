const funcoesMatematicas = require('./funcoes_matematicas');
const calculadora_idade = require('./calculadora_idade');
// Exemplo de uso:
const resultadoSoma = funcoesMatematicas.somar(5, 3);
console.log(`Resultado da soma: ${resultadoSoma}`);

const resultadoSubtracao = funcoesMatematicas.subtrair(10, 4);
console.log(`Resultado da subtração: ${resultadoSubtracao}`);

const resultadoMultiplicacao = funcoesMatematicas.multiplicar(5, 3);
console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`);

const resultadoDivisao = funcoesMatematicas.dividir(10, 2);
console.log(`Resultado da divisão: ${resultadoDivisao}`);

const mensagemIdade = calculadora_idade.idade("Ana", 1990, 2025);
console.log(mensagemIdade);