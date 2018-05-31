const path = require('path');
const express = require('express');

 const publicPath = path.join(__dirname,'../public');
// console.log(publicPath);
// console.log(__dirname + '../public');

const port = process.env.port || 3000;

var app = express();

app.use(express.static(publicPath));

app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
})