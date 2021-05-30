const express = require('express')
const app = express()
const port = 5000

const SerialPort = require('serialport')
const ReadLine = SerialPort.parsers.Readline
const parser = new ReadLine({delimiter: '\r\n'})
const mySerial = new SerialPort('COM3', {
    baudRate: 9600
})
mySerial.pipe(parser)

mySerial.on('open', () => {
    console.log('Comunicação ON' )
    parser.on('data', (data) => {
        //let dataRounded = parseFloat(data)
        console.log(data)
    })
})

app.get('/turn-on1', (req, res) => {
    res.send({body: 'on'})
    mySerial.write('c')
})

app.get('/turn-on2', (req, res) => {
    res.send({body: 'on'})
    mySerial.write('e')
})

app.get('/turn-off1', (req, res) => {
    res.send({body: 'off'})
    mySerial.write('d')
})

app.get('/turn-off2', (req, res) => {
    res.send({body: 'off'})
    mySerial.write('f')
})

app.get('/turn-on-auto-trabalho', (req, res) => {
    mySerial.write('b')
    mySerial.write('a')
})

app.get('/turn-on-auto-descanso', (req, res) => {
    mySerial.write('b')
    mySerial.write('b')
})

app.get('/turn-off-auto', (req, res) => {
    mySerial.write('b')
    mySerial.write('c')
})

app.listen(port, () => {
    console.log('Server Iniciado!')
})