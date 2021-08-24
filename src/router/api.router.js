'use strict'

const express = require('express')
const rvn = require('read-vietnamese-number')

const router = express.Router()
const config = new rvn.ReadingConfig()

function ApiResponse(ok, message) {
	return { ok, message }
}

router.get('/read', (req, res) => {
	const number = req.query.number
	if (!number) return res.json(ApiResponse(false, 'Nothing to read'))

	try {
		const numberData = rvn.parseNumberData(config, number)
		return res.json(ApiResponse(true, rvn.readNumber(config, numberData)))
	} catch (e) {
		if (e instanceof rvn.InvalidNumberError)
			return res.json(ApiResponse(false, 'Invalid number'))
		if (e instanceof rvn.UnitNotEnoughError)
			return res.json(ApiResponse(false, 'Unit not enough'))
		return res.status(500).json(ApiResponse(false, 'Unknown error'))
	}
})

module.exports = router
