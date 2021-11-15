import express from 'express';
import config from './config/config';
import cancionesRoutes from './routes/canciones';

const app = express();
const port = config.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

cancionesRoutes(app);
app.get('/prueba', (req,res,next)=>{
    const datos = {
        nombre: 'Miguel',
        apellido: 'Acevedo',
        genro: 'masculino'
    }
    const nuevosDatos = {
        ...datos,
        ciudad: 'Barbosa',
        profesion: 'Desarrollador'
    }
    const {apellido, nombre} = datos
    res.status(200).json(nuevosDatos);
})
app.listen(port, () =>{
    return console.log(`Servidor corriendo en el puerto: ${port}`);
})