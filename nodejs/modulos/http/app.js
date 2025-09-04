//importando o módulo http//
const http = require('http');

//criando um servidor que responde com "Hello World" para todas as requisições//
http.createServer((req, res) => {
    //definindo o cabeçalho da resposta com status 200 (OK) e tipo de conteúdo text/plain//
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    //envindo a resposta "Hello World"//
    res.end('Hello World\n');
    //adicionando um log no console para cada requisição recebida//
}).listen(3000);