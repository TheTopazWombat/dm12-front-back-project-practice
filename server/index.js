var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectionString = 'postgres://aleeexkang@localhost/front_to_back'

var app = module.exports = express(); // this has to be first or else the below statements won't know what var app is

var massiveInstance = massive.connectSync({
  connectionString: connectionString
});

app.set('db', massiveInstance);
var db = app.get('db');
console.log(db);

app.use(bodyParser.json());
app.use(cors());
//note the double underscore next to dirname
app.use(express.static(__dirname + './../public'));

//test
console.log(1+1);

//this tells us what url to listen for. localhost:3000/test
app.get('/test', function(req, res, next) {
  res.status(200).send('Yay');
});

//GET endpoints
//get all products
app.get('/products', function(req,res,next) {
  db.get_all_products(function(err,products) {
    res.status(200).send(products);
  });
});

//find specific products
app.get('/products/:product', function(req,res,next) {
  db.get_product_by_name(req.params.product, function(err, product){
    console.log(product);
    res.send(product);

  });
});

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
