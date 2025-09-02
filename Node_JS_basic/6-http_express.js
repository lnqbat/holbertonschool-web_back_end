const http = require('http');
const app = require('express')();

http.createServer(app);

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.listen(1245);

module.exports = app;
