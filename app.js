const http = require('http');

function rqListener(req, res) {
  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.js Server</h1></body>');
  res.write('</htm>');
  res.end();
}

const server = http.createServer(rqListener);

server.listen(8000);
