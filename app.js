require('dotenv').config();
require('./src/database');
const { resolve } = require('path');

const express = require('express');

const homeRoutes = require('./src/routes/homeRoutes');
const userRoutes = require('./src/routes/userRoutes');
const tokenRoutes = require('./src/routes/tokenRoutes');
const alunoRoutes = require('./src/routes/alunoRoutes');
const fotoRoutes = require('./src/routes/fotoRoutes');

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended: true}));
        this.app.use(express.json());
        this.app.use(express.static(resolve(__dirname, 'uploads')));
    }

    routes() {
        this.app.use('/', homeRoutes)
        this.app.use('/users', userRoutes)
        this.app.use('/tokens', tokenRoutes)
        this.app.use('/alunos', alunoRoutes)
        this.app.use('/fotos', fotoRoutes)
    }
}

module.exports = new App().app;