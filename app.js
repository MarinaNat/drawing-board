const board = document.querySelector('#board')
const colors = ['#7c27b9', '#2799b9', '#38b927', '#afb927', '#b99427', '#b92c27', '#5027b9', '#b92727']
const SQUARES_NUMBER = 1155

for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div')
	square.classList.add('square')

	square.addEventListener('mouseover', () =>
		setColor(square))

	square.addEventListener('mouseleave', () =>
		removeColor(square))

	board.append(square)
}

function setColor(element) {
	const color = getRandomColor()
	element.style.backgroundColor = color
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
	element.style.backgroundColor = '#1d1d1d'
	element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length)
	return colors[index]
}