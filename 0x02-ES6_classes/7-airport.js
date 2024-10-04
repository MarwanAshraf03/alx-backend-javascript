import util from 'util';

export default class Airport extends Object {
  constructor(name, code) {
    super();
    if ((typeof name) === 'string') this._name = name;
    else throw TypeError('name must be a string');
    if ((typeof code) === 'string') this._code = code;
    else throw TypeError('code must be a string');
  }

  get name() { return this._name; }

  set name(name) {
    if ((typeof name) === 'string') this._name = name;
    else throw TypeError('name must be a string');
  }

  get code() { return this._code; }

  set code(code) {
    if ((typeof code) === 'string') this._code = code;
    else throw TypeError('name must be a string');
  }

  toString() {
    return `[object ${this._code}]`;
  }

  [util.inspect.custom]() {
    return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
  }
//   toString(this) {
//     return `Airport [${this._code}] ${this}`;
//   }
}
