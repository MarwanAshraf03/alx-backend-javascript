export default function getListStudentIds(list) {
  if (typeof list !== 'object') return [];
  return list.map((obj) => obj.id);
}
