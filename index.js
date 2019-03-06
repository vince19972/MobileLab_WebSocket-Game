/*
**-->	modules import
*/
const express = require('express')
const path = require('path')

/*
**-->	instances and tokens
*/
const app = express()
const port = process.env.PORT || 8000
const clientAssetsDir = path.join(__dirname, 'client/build')

/*
**-->	server setup
*/

// serve static client side files
app.use(express.static(clientAssetsDir))

// catchall route
app.get('*', (req, res) => {
	// res.sendFile(path.join(clientAssetsDir, 'index.html'))
	res.send('<h1>hello world</h1>')
})

// listen port
app.listen(port)

console.log(`server is listening on port ${port}`)