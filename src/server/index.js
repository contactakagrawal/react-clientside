require('babel-register')
const http = require('http')
const app = require('./app')
const config = require('config')
const port = config.get('Port')

const server = http.createServer(app)

server.listen(3000, 'localhost', function(){
  console.log('Running at port 3000')
})
