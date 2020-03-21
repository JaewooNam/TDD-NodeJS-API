const http = require('http'); // get http node module

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World\n');
    } else {
        res.statusCode = 404;
        res.end('Nod Found');
    }
});

// make server waiting state
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// curl -X GET 'localhost:3000/users'
// curl -X GET 'localhost:3000/users -v'
