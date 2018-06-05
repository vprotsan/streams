var http =        require('http');
var url =         require('url');
var querystring = require('querystring');
var fs =          require('fs');

http.createServer(function(request, response){
  pathName = url.parse(request.url).pathname;
  fs.readFile(__dirname + pathName, function(err, data){
    if (err){
      response.writeHead(404, {'Content-Type': 'text/plain'})
      response.write('Page was not found');
      response.end();
    } else {
      response.writeHead(200, {'Content-Type': 'text/plain'})
      response.write(data);
      response.end();
    }
  });

  // pathName = url.parse(request.url).pathname;
  // query= url.parse(request.url).query;
  // queryAccess = querystring.parse();

  // console.log(pathName);
  // console.log(query);
}).listen(7000);
