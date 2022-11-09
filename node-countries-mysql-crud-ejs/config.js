var config = {
	database: {
		host:	  'localhost', 		// database host
		// host:	  '127.0.0.1', 		// database host
		user: 	  'root', 			// your database username
		password: '', 			// your database password
		port: 	  3306, 			// default MySQL port
		db: 	  'node_countries' // your database name
	},
	server: {
		host:'localhost', // the host for the server
		port: '3030' // the port for the server
	}
}

module.exports = config
