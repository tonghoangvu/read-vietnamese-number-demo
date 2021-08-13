'use strict'

const app = require('./app')
const env = require('./env')

app.listen(env.PORT, () => {
	console.log(`Server is running at ${ env.PORT }`);
})
