const express = require('express');
const app = express();
const port = 4000;

app.use(express.static('./app/public'))

// sample GET method
app.get('/', function(req, res) {
res.send('Hello World!');
});

// listen for requests in port 4000
app.listen(process.env.port || port, function(){
console.log('Now listening for requests...');
});