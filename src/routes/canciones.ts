import { Router } from "express";
import { actualizarCancion, agregarCancion, eliminarCancioncion, obtenerCancion, obtenerCanciones } from "../controllers/cancionesController";

const cancionesRoutes = (app) =>{
    const router = Router();
    app.use('/', router);


    router.get('/obtenerCanciones', obtenerCanciones)  
    router.get('/obtenerCancion/:id', obtenerCancion)  
    router.post('/agregarCancion', agregarCancion)  
    router.put('/actualizarCancion/:id',actualizarCancion)  
    router.delete('/eliminarCancion/:id', eliminarCancioncion)  
}

export default cancionesRoutes;