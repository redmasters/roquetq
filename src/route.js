const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomControler = require('./controllers/RoomControler')

const route = express.Router()

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}))

route.post('/create-room', RoomControler.create)
route.get('/room/:room', RoomControler.open)

route.post('/question/create/:room', QuestionController.create)
route.post('/question/:room/:question/:action', QuestionController.index)

module.exports = route