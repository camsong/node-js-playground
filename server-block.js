var http = require('http');

http.createServer(function(request, response) {
  console.log("Request received");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("hello world");
  sleep(10000);
  response.end();
}).listen(8888);

console.log("Server started");

function sleep(milliSecond) {
  var startTime = new Date().getTime();
  console.log(startTime);
  while(new Date().getTime() <= milliSecond + startTime) {
  }
  console.log(new Date().getTime());
}
