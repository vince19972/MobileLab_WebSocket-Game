const io = require('socket.io-client')

export default () => {
	const socket = io.connect('http://localhost:8000', {reconnection: true})

	const play = (player) => {
		socket.emit('*', player.id, player.direction)
	}

	return {
		socket,
		play
	}
}