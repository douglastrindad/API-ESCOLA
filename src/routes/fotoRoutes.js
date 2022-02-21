const express = require('express');
const loginRequired = require('../middlewares/loginRequired');
const multer = require('multer')

const fotoController = require('../controllers/FotoController');
const upload = multer()

const router = express.Router()

router.post('/',  fotoController.store);

module.exports = router;
