export default function hasValuesFromArray(s, a) {
  return (new Set(a).isSubsetOf(s));
}
