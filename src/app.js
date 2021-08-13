'use strict'

const express = require('express')
const helmet = require('helmet')
const hpp = require('hpp')
const rateLimit = require('express-rate-limit')

const app = express()

// Parser (parse before using HPP)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Security
app.disable('x-powered-by')
app.use(helmet({
	// Disable auto upgrade insecure request
	contentSecurityPolicy: false
}))
app.use(hpp())

// Rate limiting
const limiter = rateLimit({
	windowMs: 60 * 1000,
	max: 60,
	message: 'Too many requests'
})
app.use(limiter)

// Static files
app.use(express.static('public'))

module.exports = app
