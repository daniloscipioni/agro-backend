/**
 * Arquivo: src/routes/historic.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Machine'.
 * Data: 17/03/2022
 * Danilo Scipioni
 */

const router = require('express-promise-router')();
const historicController = require('../controllers/historic.controller');

/**
 * GET /api/historic
 * @summary Returns a list of machine historic.
 * @description Optional extended description in CommonMark or HTML.
 * @tag Historic
 * @response 200 - A JSON array of user names
 * @responseContent {string[]} 200.application/json
 */
router.get('/historic', historicController.listAllHistoric);

module.exports = router;

//router.get('/machines', machineController.listAllMachines);