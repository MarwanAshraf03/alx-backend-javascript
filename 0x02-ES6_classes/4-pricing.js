// import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    if ((typeof amount) === 'number') this._amount = amount;
    else throw TypeError('amount must be a number');
    if ((typeof currency) === 'object') this._currency = currency;
    else throw TypeError('currency must be a object');
  }

  get amount() { return this._amount; }

  set amount(amount) {
    if ((typeof amount) === 'number') this._amount = amount;
    else throw TypeError('amount must be a number');
  }

  get currency() { return this._currency; }

  set currency(currency) {
    if ((typeof currency) === 'object') this._currency = currency;
    else throw TypeError('amount must be a object');
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) { return amount * conversionRate; }
}
