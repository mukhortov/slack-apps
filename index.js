const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000
const app = express()

const Random = require('./server/Random')

const route = {
	root: '/',
	random: '/random',
}

// Client app

app.use(express.static(path.join(__dirname, 'public')))
	.set('views', path.join(__dirname, 'views'))
	.set('view engine', 'ejs')
	.get(route.root, (req, res) => res.render('pages/index'))

// API

// support URL-encoded bodies
app.use(express.urlencoded())

app.get(route.random, (request, response) => {
	response.send('Slack list randomizer app')
})

app.post(route.random, (request, response) => {
	new Random(request, response).respond()
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
