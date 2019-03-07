const io = require('socket.io-client')

export default () => {
	const serverURL = process.env.NODE_ENV === 'development'
		? 'http://localhost:8000'
		: 'https://mobilelab-websocket.herokuapp.com/'
	const socket = io.connect(serverURL, {reconnection: true})

	const play = (player) => {
		socket.emit('*', player.id, player.direction)
	}

	return {
		socket,
		play
	}
}