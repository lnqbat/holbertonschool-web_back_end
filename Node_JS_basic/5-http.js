const http = require('http');
const fs = require('fs');

function countStudents(dbPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(dbPath, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        const text = data.toString();
        const rawLines = text.split('\n');

        const lines = [];
        for (let i = 0; i < rawLines.length; i += 1) {
          if (rawLines[i].trim() !== '') lines.push(rawLines[i]);
        }

        if (lines.length <= 1) {
          resolve('Number of students: 0');
          return;
        }

        const students = lines.slice(1);
        const fields = {};
        const order = [];

        for (let i = 0; i < students.length; i += 1) {
          const parts = students[i].split(',');
          const firstname = parts[0].trim();
          const field = parts[parts.length - 1].trim();

          if (!fields[field]) {
            fields[field] = [];
            order.push(field);
          }
          fields[field].push(firstname);
        }

        let out = `Number of students: ${students.length}`;
        for (let i = 0; i < order.length; i += 1) {
          const f = order[i];
          const list = fields[f];
          out += `\nNumber of students in ${f}: ${list.length}. List: ${list.join(', ')}`;
        }

        resolve(out);
      } catch (e) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
    return;
  }

  if (req.url === '/students') {
    const dbPath = process.argv[2];

    res.write('This is the list of our students\n');

    countStudents(dbPath)
      .then((report) => res.end(report))
      .catch((error) => res.end(error.message));
    return;
  }

  res.end('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
