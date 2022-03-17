/**
 * Arquivo: src/routes/index.js
 * Descrição: arquivo responsável pela chamada da Api da aplicação.
 * Data: 02/03/2020
 * Author Glaucia Lemos
 */

const express = require('express');

const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

router.get(['/','/api'], (req, res) => {
  res.status(200).send({
    project: 'EasyAgro',
    description: 'Esta aplicação fornece dados para o aplicativo EasyAgro',
    success: 'true',
    message: 'Seja bem-vindo(a) a API Node.js + PostgreSQL + Heroku!',
    version: '1.0.0',
  });
});

var options = {
  customCss: '.swagger-ui .topbar {background-color:#4daf35 }',

};

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument, options));

module.exports = router;
