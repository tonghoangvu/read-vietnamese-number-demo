const dotenv = require('dotenv')

const envStatus = dotenv.config()
if (envStatus.error) {
	console.error('File .env not found')
	process.exit(1)
}

module.exports = process.env
