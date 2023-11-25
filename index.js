const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const path = require('path');
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');
require("express-async-errors");



const app = express();
const port = 3001;

app.use(express.json());

// Accesos permitidos
const whitelist = ['http://localhost:8080/'];

const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'))
    }
  }
}
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/src', express.static(path.join(__dirname, 'src')));
app.use('/script.js', express.static(path.join(__dirname, 'script.js')));
app.use(express.static(path.join(__dirname, 'public/stylePokedex.css')));



routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
  // res.send('Hola')
});







app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
