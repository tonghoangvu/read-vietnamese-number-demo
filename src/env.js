'use strict'

const dotenv = require('dotenv')

dotenv.config()

const REQUIRED_ENV_VARS = ['PORT']
for (const ENV_VAR of REQUIRED_ENV_VARS)
	if (process.env[ENV_VAR] === undefined) {
		console.error(`Missing required environment variable: ${ENV_VAR}`)
		process.exit(1)
	}

module.exports = process.env
