const { Router } = require('express');
const controller = require('./controller/register.controller');

const router = Router();

router.post('/add', controller.saveRegistre);

module.exports = router
