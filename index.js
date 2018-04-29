const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const adminUsers = require('./db.json').adminUser;

server.use(middlewares)

// Custom route with login check, before JSON Server router
server.use(jsonServer.bodyParser)
server.post('/login', (req, res) => {
	console.log(req.body);
	if(req.body.login == "ddd@gmail.com" && req.body.password == "12345678"){
			res.jsonp({status:true})
	} else {
			res.jsonp({status:false});
	}
})

server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})