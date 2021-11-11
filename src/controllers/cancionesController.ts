
const obtenerCanciones = (req, res) => {
    res.send('Obtener canciones');
}
const obtenerCancion = (req, res) => {
    res.send('Obtener cancion');
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


