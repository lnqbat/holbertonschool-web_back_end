const app = require('express')();

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.send('Hello Holberton School!');
});

app.listen(1245, () => {
  console.log('Server running at port 1245');
});

module.exports = app;
