'use strict'

const startReadingElement = document.getElementById('start-reading')
const numberElement = document.getElementById('number')
const messageElement = document.getElementById('message')

startReadingElement.addEventListener('click', () => startReading())
numberElement.addEventListener('keyup', event => {
	if (event.key === 'Enter') startReading()
})

function buildRequestApiUrl(number) {
	const url = new URL('/api/read', window.location.origin)
	url.searchParams.append('number', number)
	return url
}

function startReading() {
	const number = numberElement.value
	const apiUrl = buildRequestApiUrl(number)
	fetch(apiUrl)
		.then(response => {
			if (!response.ok) throw response
			return response.json()
		})
		.then(parsedJson => {
			if (parsedJson.ok) showMessage('', parsedJson.message)
			else showMessage('warning', parsedJson.message)
		})
		.catch(response => {
			showMessage('error', `Error ${response.status}: ${response.statusText}`)
		})
}

function showMessage(className, message) {
	messageElement.className = className
	messageElement.textContent = message
}
