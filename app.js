const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello from myapp oooh this runs!!! v1\n');
});

server.listen(80, () => {
  console.log('Server running on port 80');
});
