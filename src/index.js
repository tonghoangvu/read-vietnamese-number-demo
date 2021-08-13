'use strict'

const env = require('./env')
const app = require('./app')
const apiRouter = require('./router/api.router')

app.use('/api', apiRouter)

app.listen(env.PORT, () => {
	console.log(`Server is running at ${ env.PORT }`)
})
