const express = require('express')
const engine = require('ejs-mate')
const path = require('path')
const socketIO = require('socket.io')
const http = require('http')

// inicializar
const app = express()
const server = http.createServer(app)
const io = socketIO(server)


// configuraciones
app.engine('ejs', engine)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// rutas 
app.use(require('./rutas/index'))

// sockets
require('./sockets')(io)

// static file
app.use(express.static(path.join(__dirname, 'public')))

// arrancar servidor
server.listen(3000, () => {
    console.log('servidor en puerto 3000');
})