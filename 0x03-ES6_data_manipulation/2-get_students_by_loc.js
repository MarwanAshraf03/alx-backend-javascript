export default function getStudentsByLocation(list, city) {
  const ret = list.filter((obj) => obj.location === city);
  return ret;
}
