const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
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



routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.get('/', (req, res) => {
  //res.sendFile(path.join(__dirname, 'public','index.html'));
  res.send('Hola')
});







app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
