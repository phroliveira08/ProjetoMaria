const express = require('express')
const app = express()
const port = 5000

app.get('/turn-on', (req, res) => {
    res.send({body: 'on'})
})

app.get('/turn-off', (req, res) => {
    res.send({body: 'off'})
})

app.listen(port, () => {
    console.log('Server Iniciado!')
})