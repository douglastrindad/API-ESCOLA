const express = require('express');
const alunoController = require('../controllers/AlunoController');
const loginRequired = require('../middlewares/loginRequired');

const router = express.Router()

router.use(loginRequired)
router.get('/',  alunoController.index);
router.post('/', alunoController.store);
router.put('/:id', alunoController.update);
router.get('/:id', alunoController.show);
router.delete('/:id', alunoController.delete);

module.exports = router;
