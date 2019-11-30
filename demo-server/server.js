const express = require('express')
const app = express()

// app.get('/', function(req, res) {
//     res.send('Hello')
// })

app.use('/', express.static(__dirname + '/public'))

app.get('/get-data', function(req,res) {
    let data = {
        message: 'this data from my local server!'
    }
    res.json(data)
})

app.listen(8081, function(error) {
    if(error) { 
        console.log('Server opening failed')
    } else {
        console.log('Magic happening on port 8081!')
    }
})