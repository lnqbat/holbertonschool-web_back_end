import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const content = data.toString().split('\n');
      const lines = content.slice(1);
      const fields = {};

      lines.forEach((line) => {
        if (line.trim() !== '') {
          const parts = line.split(',');
          const firstname = parts[0].trim();
          const field = parts[parts.length - 1].trim();

          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      });

      resolve(fields);
    });
  });
}
