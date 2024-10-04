export default class Airport extends Object {
  constructor(size, location) {
    super();
    if ((typeof size) === 'number') this._size = size;
    else throw TypeError('size must be a number');
    if ((typeof location) === 'string') this._location = location;
    else throw TypeError('location must be a string');
  }

  get size() { return this._size; }

  set size(size) {
    if ((typeof size) === 'number') this._size = size;
    else throw TypeError('size must be a number');
  }

  get location() { return this._location; }

  set location(location) {
    if ((typeof location) === 'string') this._location = location;
    else throw TypeError('size must be a string');
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return `${this._location}`;
    } if (hint === 'number') {
      return `${this._size}`;
    }

    throw Error('invalid cast');
  }
}
