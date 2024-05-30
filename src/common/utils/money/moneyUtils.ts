import { NumberParser, NumberFormatter } from '@internationalized/number';

// We could also use Intl directly, but there is no explicit parsing, so it would need to be implemented - I decided not to do this for this challenge
// new Intl.NumberFormat('en-US', { currency: 'USD' });

// right now we support only en-US locales
export const DECIMAL_SEPARATOR = '.';
export const GROUPING_SEPARATOR = ',';
let parser = new NumberParser('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });

const numberFormatter = new NumberFormatter('en-US', { currency: 'USD', maximumFractionDigits: 2 });
const currencyFormatter = new NumberFormatter('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });

export const formatMoney = (amount: number | undefined): string => {
  if (amount === undefined || isNaN(amount)) {
    return '---';
  }
  return currencyFormatter.format(amount); // Formats as USD currency: "$4,999.99"
}

export const formatNumber = (amount: number | undefined, emptyStr = '---'): string => {
  if (amount === undefined || isNaN(amount)) {
    return emptyStr;
  }
  return numberFormatter.format(amount); // Formats as USD currency: "$4,999.99"
}

export const parseMoney = (str: string) => {
  return parser.parse(str);
}

const inputValidationRegExp = RegExp(`^\\d+(${GROUPING_SEPARATOR}\\d*)*((?<=\\d)\\${DECIMAL_SEPARATOR}\\d{0,2})*$`);

export const isMoneyInputValid = (value: string) => {
  return inputValidationRegExp.test(value);
}
