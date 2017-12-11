//we first get the core module that allows us to make a server
var http = require('http');


//then we create the server. we give it a function that has a request object(req) and response object(res). this function fires whenever we send a request to the server:
//the request object has details about the request that has been made and the response object is something we can use to send information back to the client
var server = http.createServer(function(req, res){
  console.log("request was made: " + req.url)//this tells us what the url was where the request came from
  res.writeHead(200, {'Content-Type': 'text/plain'});//this is to give the browser some information about the response we are sending
  res.end("Vernon hates Jason")//this ends the response and sends the contained information to the browser
});

server.listen(3000, '127.0.0.1');//sets the port number that our server 'server' will listen on and the IP address (local host in this situation)
console.log("sup homie, we are now running a server and listening on port 3000");
