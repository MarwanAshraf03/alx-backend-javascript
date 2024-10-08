// export default function createInt8TypedArray(length, position, value) {
	//   if (position > length || position < length) throw new Error('Position outside range');
	//   const arr = new Int8Array(length);
	//   try {
		//     arr[position] = value;
		//   } catch (Error) {
			//     throw new Error('Position outside range');
			//   }
//   return arr;
// }

export default function createInt8TypedArray(length, position, value) {
	const uint8 = new Uint8Array([1, 2, 3]);
console.log(uint8[0]); // 1

// For illustrative purposes only. Not for production code.
uint8[-1] = 0;
uint8[2.5] = 0;
uint8[NaN] = 0;
console.log(Object.keys(uint8)); // ["0", "1", "2"]
console.log(uint8[NaN]); // undefined

// Non-numeric access still works
uint8[true] = 0;
console.log(uint8[true]); // 0

Object.freeze(uint8); // TypeError: Cannot freeze array buffer views with 
}