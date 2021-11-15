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

    const { id } = req.params;
    try{
        const response = await executeQuery(`SELECT * FROM canciones WHERE id = ${id}`)
        res.send(response);
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}
const agregarCancion = async (req, res) => {
    const { nombre, artista, album, duracion } = req.body;
    try{
        const response = await executeQuery(`INSERT INTO canciones (Nombre, Artista, Album, Duracion) VALUES  ('${nombre}','${artista}', '${album}', '${duracion}')`)
        res.send(response);
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}
const actualizarCancion = async (req, res) => {
    const { nombre, artista, album, duracion } = req.body;
    const { id } = req.params;
    try{
        const response = await executeQuery(`UPDATE canciones SET Nombre='${nombre}',Artista='${artista}',Album='${album}',Duracion='${duracion}' WHERE id = '${id}'`)
        res.json({message: response.affectedRows > 0 ? 'updated' : 'no se encontro el id'});
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}
const eliminarCancioncion = async (req, res) => {
    const { id } = req.params;
    try{
        const response = await executeQuery(`DELETE FROM canciones WHERE id = '${id}'`)
        res.json({message: response.affectedRows > 0 ? 'deleted' : 'no se encontro el id'});
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}

export { obtenerCanciones, obtenerCancion, agregarCancion, actualizarCancion,eliminarCancioncion };


