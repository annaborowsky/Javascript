const usuariosModel = require('../models/usuariosModel');
moduleexports ={
    index: (req, res) => {
        res.send('<h1>Lista de Usuários</h1>', {root: 'views'})
},
formulario:(req, res) => {
    res.sendFile('formularioUsuario.html', {root: 'views'});
},
NavigatorLogin:(req, res) => {
    const { login, senha } = req.body;
    const usuario = usuariosModel.gerarMensagemLogin(login, senha);
    res.send ('<h1>' + usuario + '</h1>');
} };