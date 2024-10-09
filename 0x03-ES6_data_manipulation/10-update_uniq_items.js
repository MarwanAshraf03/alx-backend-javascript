export default function updateUniqueItems(map) {
  if (typeof map !== 'object') throw new Error('Cannot process');
  map.forEach((v, k) => {
    if (v === 1) map.set(k, 100);
    else map.set(k, v);
  });
  return map;
}
