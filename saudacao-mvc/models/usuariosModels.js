module.exports = {
  gerarMensagemLogin: (login, senha) => {
    let acesso;

    if (login === "Asafe" && senha === "12345") {
    acesso = "Logado";

    } else {
        acesso = "Negado";
    }

    return `Olá, ${login}, seu acesso foi: ${acesso}!`;
  }
};
