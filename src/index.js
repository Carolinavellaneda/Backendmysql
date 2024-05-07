import express from "express";
import cors from "cors";
// importamos la configuracion de la BD
import BD from '../config/db.js'
// importamos el archivo de la ruta
import citaRoutes from '../routes/Routes_Citas.js'


//definimos la variable app para trabajar con express
const app = express();
app.use(cors());
app.use(express.json());
app.use('/citas',citaRoutes);

//autentificacion BD
try {
    await BD.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

app.get('/', (req,res) =>{
    res.send("hola mundo :)" );
});

app.listen(5000, () =>{
    console.log ("el servidor esta corriendo en http://localhost:5000");
});
