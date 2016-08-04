var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

var app = module.exports = express(); // this has to be first or else the below statements won't know what var app is
app.use(bodyParser.json());
app.use(cors());

//test
console.log(1+1);

//this tells us what url to listen for. localhost:3000/test
app.get('/test', function(req, res, next) {
  res.status(200).send('Yay');
});

//get all products
app.get('/products', function(req,res,next) {

})

//find specific products
app.get('products/:product', function(req,res,next) {

})

//POST endpoints
//difference between post and put. post is create, put is update
//create products
app.post('/products', function(req,res,next) {

})

//PUT endpoints
//update products
app.put('/products/:id', function(req,res,next) {

})

//DELETE endpoints
//delete products
app.put('/products', function(req,res,next) {

})

//this tells us what port to listen on. so localhost:3000
app.listen(3000, function() {
  console.log('whatever');
});
