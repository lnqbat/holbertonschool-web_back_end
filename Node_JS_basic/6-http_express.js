const http = require('http');
const app = require('express')();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

const server = http.createServer(app);
server.listen(1245);

module.exports = app;
