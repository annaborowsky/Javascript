const saudacaoModel = require('../models/saudacaoModel');

module.exports = {
  index: (req, res) => {
    res.sendFile('index.html', { root: './views' });
  },

  formulario: (req, res) => {
    res.sendFile('formulario.html', { root: './views' });
  },

  saudacao: (req, res) => {
    const { nome, idade } = req.body;
    const mensagem = saudacaoModel.gerarMensagemPersonalizada(nome, idade);
    res.send(`<h1>${mensagem}</h1>`);
  },

  produtos: (req, res) => {
    res.sendFile('produtos.html', { root: './views' });
  },

  camisetas: (req, res) => {
    res.sendFile('camisetas.html', { root: './views' });
  }

};
