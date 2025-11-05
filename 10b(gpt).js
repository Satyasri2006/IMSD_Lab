const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/data') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      console.log('Received data:', body);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'success', received: body }));
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});
