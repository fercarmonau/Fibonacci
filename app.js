var express = require('express') 
var fibonacciLogic =  require('./fibonacciLogic')
var app = express()               

var port = process.env.PORT || 8080  

app.get('/', function(req, res) {
  res.send('Hi, this is the Fibonacci Index App, please send a index greater than 0')   
})

app.get('/:index', function(req, res) {
  var index = parseInt(req.params.index)
  var resMessage
  if(index != null && index >= 0 ) {

    fibonacciNumber = fibonacciLogic.getFibonacciNumber(index)
    resMessage = "Fibonacci Number = " + fibonacciNumber
  }
  else {
      resMessage = "Invalid Index"
  }

  res.send(resMessage)  
})
  
  app.listen(port)
  console.log('API listen port ' + port)