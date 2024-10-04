// import Currency from './3-currency.js';

export default class Building {
  constructor(sqft) {
    if ((typeof sqft) === 'number') this._sqft = sqft;
    else throw TypeError('sqft must be a number');
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') throw new Error('Class extending Building must override evacuationWarningMessage');
  }

  get sqft() { return this._sqft; }

  set sqft(sqft) {
    if ((typeof sqft) === 'number') this._sqft = sqft;
    else throw TypeError('sqft must be a number');
  }
}
