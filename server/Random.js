const SlackApp = require('./SlackApp')
const shuffleArray = require('../utility/shuffle')

module.exports = class Random extends SlackApp {
	process() {
		let responseText = this.defaultResponse()
		const command = this.command()
		const list = command.split(',').map(item => item.trim())

		if (list.length <= 1) {
			return responseText
		}

		responseText = shuffleArray(list)
			.map((item, index) => `${ index + 1 } *${ item }*`)
			.join('\n')

		return `>>> ${responseText}`
	}
}
