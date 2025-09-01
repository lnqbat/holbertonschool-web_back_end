const fs = require('fs');

function countStudents(path) {
  try {
    const fileData = fs.readFileSync(path);
    const text = fileData.toString();

    const rawLines = text.split('\n');
    const lines = [];

    for (let i = 0; i < rawLines.length; i += 1) {
      if (rawLines[i].trim() !== '') {
        lines.push(rawLines[i]);
      }
    }

    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    const students = lines.slice(1);
    console.log(`Number of students: ${students.length}`);

    const fields = {};
    for (let i = 0; i < students.length; i += 1) {
      const parts = students[i].split(',');
      const firstname = parts[0].trim();
      const field = parts[parts.length - 1].trim();

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    }

    for (const [field, list] of Object.entries(fields)) {
      console.log(
        `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`,
      );
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
