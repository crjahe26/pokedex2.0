const express = require('express');
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
require("express-async-errors");


const app = express();
const port = 3001;

app.use(express.json())




routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.get('/', (req, res) => {
  //res.sendFile(path.join(__dirname, 'public','index.html'));
  res.send('Hola')
});







app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
