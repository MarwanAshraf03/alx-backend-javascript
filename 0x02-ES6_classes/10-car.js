export default class Car {
  constructor(brand,motor,color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() { return this._brand; }

  set brand(brand) {
    if ((typeof brand) === 'string') this._brand = brand;
    else throw TypeError('brand must be a string');
  }

  get motor() { return this._motor; }

  set motor(motor) {
    if ((typeof motor) === 'string') this._motor = motor;
    else throw TypeError('motor must be a string');
  }

  get color() { return this._color; }

  set color(color) {
    if ((typeof color) === 'string') this._color = color;
    else throw TypeError('color must be a string');
  }


  cloneCar(){return new this.constructor()}

}
