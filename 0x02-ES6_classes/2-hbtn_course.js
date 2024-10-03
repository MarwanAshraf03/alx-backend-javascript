export default class HolbertonCourse {
  constructor(name, length, students) {
    if ((typeof name) === 'string') this._name = name;
    else throw TypeError('Name must be a string');
    if ((typeof length) === 'number') this._length = length;
    else throw TypeError('length must be a number');
    if ((typeof students) === 'object') this._students = students;
    else throw TypeError('student must be an array');
  }

  get name() { return this._name; }

  get length() { return this._length; }

  get students() { return this._students; }

  set name(name) {
    if ((typeof name) === 'string') this._name = name;
    else throw TypeError('name must be a string');
  }

  set length(length) {
    if ((typeof length) === 'number') this._length = length;
    else throw TypeError('length must be a number');
  }

  set students(students) {
    if ((typeof students) === 'object') this._students = students;
    else throw TypeError('students must be an array');
  }
}
