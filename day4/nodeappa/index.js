var express = require('express')
var app = express();
var retArr = require('./data')

app.get('/first', (req, res) => {
    res.send('Welcome to first page')
})

app.get('/person', (req, res) => {
    res.send(JSON.stringify(retArr()))
})

app.post('/send', (req, res) => {
    res.send('I am coding post')
})

app.put('/update', (req, res) => {
    res.send('I am coding put')
})

app.delete('/remove', (req, res) => {
    res.send('I am coding delete')
})



app.listen(8080)