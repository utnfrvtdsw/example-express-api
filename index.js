const express = require('express')
const app = express()
const port = 3000

// Hello World endpoint
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Add a POST endpoint for "ping-pong"
app.post('/ping', (req, res) => {
  res.json({ message: 'pong' })
})

// Add a POST endpoint to make greetings for a name
app.post('/greet', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res.status(400).json({ error: 'Name is required' })
  }
  res.json({ message: `Hello, ${name}!` })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})