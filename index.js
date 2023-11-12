const express = require('express');
const routerApi = require('./routes');


const app = express();
const port = 3001;

app.use(express.json())




routerApi(app);

app.get('/', (req, res) => {
  //res.sendFile(path.join(__dirname, 'public','index.html'));
  res.send('Hola')
});







app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
