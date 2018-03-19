module.exports = class SlackApp {
	constructor(request, response) {
		this.request = request
		this.response = response
	}

	defaultResponse() {
		return 'The answer to the ultimate question of life, the universe and everything is *42*'
	}

	process() {
		return this.defaultResponse()
	}

	command() {
		return this.request.body.text || ''
	}

	respond() {
		this.response.json({
			'response_type': 'in_channel',
			'text': this.process(),
		})
	}
}
