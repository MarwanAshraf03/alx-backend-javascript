const fs = require('fs');

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
  try {
    let data = fs.readFileSync(path, { encoding: 'utf8', flag: 'r' });
    data = data.split('\n').filter((n) => n);
    const datat = csvParser(data);
    const dataByField = {};
    Object.values(datat).forEach((e) => {
      if (!Object.keys(dataByField).includes(e.field)) dataByField[e.field] = [];
      dataByField[e.field].push(e.firstname);
    });
    console.log(`Number of students: ${data.length - 1}`);
    Object.keys(dataByField).forEach((e) => {
      console.log(
        `Number of students in ${e}: ${
          dataByField[e].length
        }. List: ${dataByField[e].join(', ')}`,
      );
    });
  } catch (ENOENT) {
    console.log('Cannot load the database');
  }
}
module.exports = countStudents;
