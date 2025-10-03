//importa o módulo http nativo do Node.js
import http from "http";

const PORT = 3000;

//cria o servidor
const server = http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;

    //define o cabeçalho da resposta
    response.setHeader("Content-Type", "text/html; charset=utf-8");

    //roteamento básico
    if (url === "/") {
        response.statusCode = 200;//OK
        response.end("<h1>Bem-vindo à página inicial!</h1>");
    } else if (url === "/sobre" && method === "GET") {
        response.statusCode = 200;//OK
        response.end(
            "<h1>Sobre nós</h1>"
        );
    } else if (url === "/contato") {
        response.statusCode = 200;//OK
        response.end("<h1>Fale conosco</h1>");

    }
    else if (url === "/fotos") {
        response.statusCode = 200;//OK
        response.end("<h1>Nossas fotos</h1>");
    }
    else {
        //se nenhuma rota for correspondida
        response.statusCode = 404;//Not found
        response.end("<h1>Página não encontrada</h1>");
    }
});

//inicia o servidor para ouvir  na porta definida
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});