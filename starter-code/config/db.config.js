//Seguir esta ruta siempre para tener ordenada nuestra conexión y desconexión

const mongoose = require("mongoose")
const proess = require("process")
mongoose
    .connect('mongodb://localhost:27017/movies', { useNewUrlParser: true })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });

process.on("SIGINT", () => {
    mongo.connection.close()
        .then(() => console.log('Se ha desconectado correctamente del DB'))
        .catch((e) => console.error('Error al desconectarse de la DB'))
        .finally(() => process.exit())
});