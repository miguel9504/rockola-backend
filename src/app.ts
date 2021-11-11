import express from 'express';
import cancionesRoutes from './routes/canciones';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

cancionesRoutes(app);
app.get('/prueba/:id', (req,res,next)=>{
 
    res.status(200).json({'Prueba del servidor':'ok'});
})
app.listen(port, () =>{
    return console.log(`Servidor corriendo en el puerto: ${port}`);
})