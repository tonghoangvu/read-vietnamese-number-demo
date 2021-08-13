'use strict'

const express = require('express')
const app = express()

// Security
app.disable('x-powered-by')

// Static files
app.use(express.static('public'))

// Parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

module.exports = app
