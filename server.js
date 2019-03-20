const express = require('express')
const port = process.env.PORT || 8080
const path = require('path')
const compression = require('compression')

const app = express()

app.use(compression())
app.use(express.static(path.join(__dirname, '/dist/gramofonika')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/gramofonika/index.html'))
})

app.listen(port)
