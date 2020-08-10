module.exports = io => {
    io.on('connection', (socket) => {
        console.log('nuevo usuario conectado');

        socket.on('usuarioCordenada', coords => {
            socket.broadcast.emit('nuevoUsuarioCoordenadas', coords)
            // console.log(coords);
        })
    })
}