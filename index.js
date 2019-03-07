/*
**-->	modules import
*/
const http = require('http')
const express = require('express')
const path = require('path')
const io = require('socket.io')

/*
**-->	instances and tokens
*/
const app = express()
const httpServer = http.Server(app)
const ioServer = io(httpServer)

const port = process.env.PORT || 8000
const clientAssetsDir = path.join(__dirname, 'client/build')

/*
**-->	websocket store
*/
const players = {}

/*
**-->	server setup
*/
// websocket
ioServer.on('connection', function(socket) {
	console.log('a user connected')

	socket.on('testing', (msg) => {
		console.log(`testing is ${msg}`)
	})
	socket.on('*', (player, direction) => {
		console.log(player)
		console.log(direction)
		players[player] = direction

    socket.broadcast.emit('user joined', player, direction)
	})
})

httpServer.on('upgrade', (req, socket) => {
	// Make sure that we only handle WebSocket upgrade requests
	if (req.headers['upgrade'] !== 'websocket') {
		socket.end('HTTP/1.1 400 Bad Request')
		return
	}
})

// listen port
httpServer.listen(port, () => {
	console.log(`server is listening on port ${port}`)
})

// // serve static client side files
app.use(express.static(clientAssetsDir))

// catchall route
app.get('*', (req, res) => {
	res.sendFile(path.join(clientAssetsDir, 'index.html'))
})