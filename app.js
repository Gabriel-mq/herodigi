
const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(process.env.PORT || 3000, () => { console.log('¡Servidor Funcionando!'); })


app.get('/', (req, res) => {
    res.send( 'Mi server Funcionando');
})

