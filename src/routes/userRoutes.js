const express = require('express');
const userController = require('../controllers/UserController');

const loginRequired = require('../middlewares/loginRequired'); 

const router = express.Router()

// Não deveria existir
router.post('/', userController.store);
router.use(loginRequired)
router.get('/', userController.index); // lista usuários
router.get('/:id', userController.show); // lista usuários
router.put('/', userController.update);
router.delete('/', userController.delete);

module.exports = router;
