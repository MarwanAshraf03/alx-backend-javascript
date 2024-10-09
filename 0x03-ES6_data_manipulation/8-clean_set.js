export default function cleanSet(set, startString) {
  if (!startString.length) return '';
  const strings = [];
  set.forEach((element) => {
    if (element.startsWith(startString)) strings.push(element.replace(startString, ''));
  });
  return strings.join('-');
}
