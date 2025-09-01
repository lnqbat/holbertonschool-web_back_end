const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        const text = data.toString();

        const rawLines = text.split('\n');
        const lines = [];
        for (let i = 0; i < rawLines.length; i += 1) {
          if (rawLines[i].trim() !== '') {
            lines.push(rawLines[i]);
          }
        }

        if (lines.length <= 1) {
          console.log('Number of students: 0');
          resolve();
          return;
        }

        const students = lines.slice(1);
        console.log(`Number of students: ${students.length}`);

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

        for (let i = 0; i < order.length; i += 1) {
          const field = order[i];
          const list = fields[field];
          console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
        }

        resolve();
      } catch (e) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;
