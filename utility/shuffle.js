module.exports = array => {
	if (!Array.isArray(array)) {
		throw new TypeError(`Expected Array, got ${typeof array}`)
	}

	var length = array.length
	var shuffled = array.slice()

	while (length) {
		const random = Math.floor(Math.random() * length--)
		const temp = shuffled[length]

		shuffled[length] = shuffled[random]
		shuffled[random] = temp
	}

	return shuffled
}
