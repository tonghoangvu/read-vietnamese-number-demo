'use strict'

const env = require('./env')
const app = require('./app')
const logger = require('./middleware/logger.middleware')
const apiRouter = require('./router/api.router')

app.use(logger)
app.use('/api', apiRouter)

app.listen(env.PORT, () => {
	console.log(`Server is running at ${env.PORT}`)
})
