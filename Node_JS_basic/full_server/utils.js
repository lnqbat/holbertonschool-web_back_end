import fs from 'fs';

export default function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err || !data) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data
        .split('\n')
        .map((l) => l.replace(/\r$/, ''))
        .filter((l) => l.trim() !== '');

      const rows = lines.slice(1);

      const fields = {};
      for (const line of rows) {
        const parts = line.split(',').map((p) => p.trim());
        if (parts.length < 2) {
          continue;
        }

        const firstname = parts[0];
        const field = parts[parts.length - 1];

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }

      resolve(fields);
    });
  });
}
