'use strict'

const submitElement = document.getElementById('submit')
const numberElement = document.getElementById('number')
const messageElement = document.getElementById('message')

numberElement.addEventListener('keyup', onKeyUp)
submitElement.addEventListener('click', onSubmit)

function onKeyUp(event) {
	event.preventDefault()
	if (event.which === 13)
		onSubmit()
}

function onSubmit() {
	const number = numberElement.value
	const url = new URL('/api/read', window.location.origin)
	url.searchParams.append('number', number)

	fetch(url)
		.then(response => {
			if (!response.ok)
				throw response
			return response.json()
		})
		.then(parsedJson => {
			if (parsedJson.ok)
				setMessage(null, parsedJson.message)
			else
				setMessage('orange', parsedJson.message)
		})
		.catch(response => {
			setMessage('red', `Error ${ response.status }: ${ response.statusText }`)
		})
}

function setMessage(color, message) {
	// With color, null is reset, undefined is no change
	if (color === null)
		messageElement.style.color = ''
	else
		messageElement.style.color = color
	messageElement.innerText = message
}
