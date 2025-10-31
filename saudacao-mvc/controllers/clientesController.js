const { format } = require('morgan');
const clientesModel = require('../models/clientesModel');


module.exports = {

    formLogin: (req, res) => {
        res.sendFile('formLogin.html', {root: './views'});
    },
    
  listarClientes: (req, res) => {
    const { login, senha } = req.body;
    const mensagem = clientesModel.verificarLogin(login, senha);
    res.send(`<h1>${mensagem}</h1>`);
  }
};
