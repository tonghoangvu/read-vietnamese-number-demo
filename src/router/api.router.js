const express = require('express')
const rvn = require('read-vietnamese-number')

const router = express.Router()
const config = new rvn.ReadingConfig()

function ApiResponse(ok, message) {
	return { ok, message }
}

router.get('/read', (req, res) => {
	const number = req.query.number

	if (number === undefined)
		return res.json(ApiResponse(false, 'Nothing to read'))

	const numberData = rvn.parseNumberData(config, number)
	if (numberData === null)
		return res.json(ApiResponse(false, 'Invalid number'))

	return res.json(ApiResponse(true, rvn.readNumber(config, numberData)))
})

module.exports = router
