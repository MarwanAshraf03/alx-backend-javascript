export default function getStudentIdsSum(list) {
  const inin = 0;
  const ret = list.reduce((acc, cvalue) => acc + Number(cvalue.id), inin);
  return ret;
}
