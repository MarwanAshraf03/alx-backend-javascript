export default function getListStudentIds(list) {
  if (typeof list !== 'object') return [];
  const ret = [];
  list.map((obj) => {
    ret.push(obj.id);
    return ret;
  });
  return ret;
}
