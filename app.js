const http = require('http');

function rqListener(req, res) {
  console.log(req);
  process.exit();
}

const server = http.createServer(rqListener);

server.listen(8000);
