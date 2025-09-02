import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    const dbPath = process.argv[2];

    readDatabase(dbPath)
      .then((fields) => {
        let response = 'This is the list of our students';

        const fieldNames = [];
        for (const f in fields) {
          if (Object.prototype.hasOwnProperty.call(fields, f)) {
            fieldNames.push(f);
          }
        }

        for (let i = 0; i < fieldNames.length - 1; i += 1) {
          for (let j = i + 1; j < fieldNames.length; j += 1) {
            if (fieldNames[i].toLowerCase() > fieldNames[j].toLowerCase()) {
              const temp = fieldNames[i];
              fieldNames[i] = fieldNames[j];
              fieldNames[j] = temp;
            }
          }
        }

        for (let i = 0; i < fieldNames.length; i += 1) {
          const f = fieldNames[i];
          const list = fields[f] || [];
          response += `\nNumber of students in ${f}: ${list.length}. List: `;
          for (let k = 0; k < list.length; k += 1) {
            response += list[k];
            if (k < list.length - 1) {
              response += ', ';
            }
          }
        }

        res.status(200).send(response);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const dbPath = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(dbPath)
      .then((fields) => {
        const list = fields[major] || [];
        let response = 'List: ';
        for (let i = 0; i < list.length; i += 1) {
          response += list[i];
          if (i < list.length - 1) {
            response += ', ';
          }
        }

        res.status(200).send(response);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
