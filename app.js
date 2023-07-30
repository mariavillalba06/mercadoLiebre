//Requerimos express y lo ejecutamos
const express = require('express');
const app = express();

//Modulo nativo para manejar las rutas de los archivos
const path = require('path');

//Recursos estáticos
app.use(express.static('public'));

//Poner a escuchar el servidor
app.listen(3030,()=>{
    console.log("Levantando un servidor con Express");
})

/* RUTAS  */
// Raiz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'views/home.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname,'views/home.html'));
});

//Registro de usuario
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname,'views/register.html'));
});

//Login de usuario
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,'views/login.html'));
});


