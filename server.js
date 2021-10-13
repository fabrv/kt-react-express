// Libreria de express, framework de backend
// Springboot
var express = require('express')
// Libreria para hacer request cross origin
var cors = require('cors')

var app = express()
app.use(cors())

let user = false
let todos = ['Cocinar', 'Ir al super']

function authMiddleware (req, res, next) {
  if (user) {
    next()
  } else {
    res.status(401).send('Unathorized')
  }
}

app.get('/login', (req, res) => {
  user = true
  res.send({
    message: 'sucess'
  })
})

app.get('/todos', authMiddleware, (req, res) => {
  res.send(todos)
})

app.post('/todos', authMiddleware, (req, res) => {
  const newTodo = req.query.todo
  if (!newTodo) return res.status(400).send('Bad Request')

  todos.push(newTodo)
  res.send(todos)
})

app.delete('/todos', authMiddleware, (req, res) => {
  const index = req.query.index

  todos.splice(index, 1)
  res.send(todos)
})

app.get('/', authMiddleware, (req, res) => {
  res.send({
    message: 'Hello world'
  })
})

app.listen(3001, () => {
  console.log('Example app listening on port 3001!')
})