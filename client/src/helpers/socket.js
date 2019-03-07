const io = require('socket.io-client')

export default () => {
	const socket = io.connect('http://localhost:8000', {reconnection: true})

	const testing = () => {
		socket.emit('testing', 'hello testing here')
	}

	return {
		testing
	}
}