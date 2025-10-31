const produtosModel = require("../models/produtosModel");

module.exports = {

  index: (req, res) => {
    res.sendFile("produtos.html", { root: "./views" });
  },

  formulario: (req, res) => {
    res.sendFile("formProduto.html", { root: "./views" });
  },

  cadastrar: (req, res) => {
    const { id, descricao, quantidade, valor_unitario } = req.body;

    const mensagem = produtosModel.gerarMensagemProdutos(
      id,
      descricao,
      quantidade,
      valor_unitario
    );

    res.send(`<h1>${mensagem}</h1>`);
  },
};