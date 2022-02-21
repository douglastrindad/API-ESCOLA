const app = require('./app.js');

const port = 3001;

app.listen(port, () =>{
    console.log(`Escutando a porta ${port}`);
});