export default function createInt8TypedArray(length, position, value) {
  if (position > length || position < length) throw new Error('Position outside range');
  const arr = new Int8Array(length);
  try {
    arr[position] = value;
  } catch (Error) {
    throw new Error('Position outside range');
  }
  return arr;
}
