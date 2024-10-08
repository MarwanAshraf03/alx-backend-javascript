export default function updateStudentGradeByCity(list, city, newGrades) {
  const filtered = list.filter((obj) => obj.location === city);
  const ret = [];
  filtered.map((obj) => {
    const nobj = obj;
    try {
      const student = newGrades.find((element) => element.studentId === nobj.id);
      nobj.grade = student.grade;
    } catch (Error) {
      nobj.grade = 'N/A';
    }
    ret.push(nobj);
    return obj;
  });
  return ret;
}
