import executeQuery from "../services/mysql.service";

const obtenerCanciones = (req, res) => {
    executeQuery("SELECT * FROM canciones").then(response =>{
        const data = {
            message: `se obtuvieron ${res.length} datos`,
            data: response.length > 0? response : null
        }
        res.json(response);
    }).catch(error =>{
        res.status(500).send(error);
    })
}
const obtenerCancion = async (req, res) => {
    const response = await executeQuery(`SELECT * FROM canciones WHERE id = ${req.params.id}`)
    res.send(response);
}
const agregarCancion = (req, res) => {
    res.send('agregar canciones');
}
const actualizarCancion = (req, res) => {
    res.send('actualizar canciones');
}
const eliminarCancioncion = (req, res) => {
    res.send('eliminar canciones');
}

export { obtenerCanciones, obtenerCancion, agregarCancion, actualizarCancion,eliminarCancioncion };


