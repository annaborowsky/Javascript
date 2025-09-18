//const fs = require('fs');
import fs from 'fs';

//Escreve no arquivo
fs.readFile('exemplo.txt', 'utf8', (erro, conteudoDoArquivo) => {
    if (erro) {
        console.error('Erro ao ler o arquivo:', erro);
        return;
    }
    console.log('Conteúdo do arquivo:', conteudoDoArquivo);
});
console.log('Essa mensagem aparece primeiro.');