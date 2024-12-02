const fs = require("fs");
function countStudents(path) {
  try {
    let data = fs.readFileSync(path, { encoding: "utf8", flag: "r" });
    data = data.split("\n").filter((n) => n);
    const datat = csv_parser(data);
    data_by_field = {};
    Object.values(datat).forEach((e) => {
      if (!Object.keys(data_by_field).includes(e.field))
        data_by_field[e.field] = [];
      data_by_field[e.field].push(e.firstname);
    });
    console.log("Number of students: " + (data.length - 1));
    Object.keys(data_by_field).forEach((e) => {
      console.log(
        "Number of students in " +
          e +
          " :" +
          data_by_field[e].length +
          ". List: " +
          data_by_field[e].join(", ")
      );
    });
  } catch (ENOENT) {
    console.log("Cannot load the database");
  }
}
module.exports = countStudents;

function csv_parser(data) {
  let datat = {};
  str_list = data;
  cols_list = data[0].split(",");
  for (let i = 1; i < str_list.length; i++) {
    datat[i] = {};
    for (let j = 0; j < cols_list.length; j++) {
      datat[i][cols_list[j]] = data[i].split(",")[j];
    }
  }
  return datat;
}
