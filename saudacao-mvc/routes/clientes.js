const express = require("express");
const router = express.Router();
const clientesController = require('../controllers/siteController');

router.get('/', clientesController.formLogin);
router.post('/acesso', clientesController.listarClientes);

module.exports = router;