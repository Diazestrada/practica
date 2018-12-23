const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const app = express();
const { url }  = require('./database');
require('./index');
const routes = require('./routes');


//middlewares
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
routes(app);

// importacion de ruta


// Conexion base de datos Y lanzamos el servidor y puerto
mongoose.connect(url,{ useNewUrlParser: true })
.then(() =>{
    console.log('Conectado a la base de datos');
    return app.listen(process.env.PORT, (error, servicio) => {
        if(!error)
        {
         console.log(`Servidor iniciado en el puerto ${process.env.PORT}!`);
        }else{
            console.log('servidor no iniciado', error);
        }
    });
})
.catch((err) =>{
    if(err) throw err;
});


