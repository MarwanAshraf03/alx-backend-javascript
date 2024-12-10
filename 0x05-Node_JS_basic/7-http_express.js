const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

function csvParser(data) {
  const datat = {};
  const strList = data;
  const colsList = data[0].split(',');
  for (let i = 1; i < strList.length; i += 1) {
    datat[i] = {};
    for (let j = 0; j < colsList.length; j += 1) {
      datat[i][colsList[j]] = data[i].split(',')[j];
    }
  }
  return datat;
}

function countStudents(path) {
  let str = 'This is the list of our students\n';
  try {
    let data = fs.readFileSync(path, { encoding: 'utf8', flag: 'r' });
    data = data.split('\n').filter((n) => n);
    const datat = csvParser(data);
    const dataByField = {};
    Object.values(datat).forEach((e) => {
      if (!Object.keys(dataByField).includes(e.field)) dataByField[e.field] = [];
      dataByField[e.field].push(e.firstname);
    });
    // str += ``;
    str += `Number of students: ${data.length - 1}`;
    Object.keys(dataByField).forEach((e) => {
      str += `\nNumber of students in ${e}: ${
        dataByField[e].length
      }. List: ${dataByField[e].join(', ')}`;
    });

    return str;
  } catch (ENOENT) {
    return `This is the list of our students
  Cannot load the database`;
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  try {
    res.send(countStudents(process.argv[2]));
  } catch (error) {
    res.send();
  }
});

app.listen(port);

module.exports = app;
