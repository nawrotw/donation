import { describe, it, expect } from "vitest";
import { isMoneyInputValid } from "./moneyUtils.ts";

// - DECIMAL_SEPARATOR: '.'
// - GROUP?_SEPARATOR: ','
const positiveCases = [
  '0',
  '1',
  '10',
  '100',
  '1.',
  '1.0',
  '1.00',
  '1000',
  '1000.01',
  '1,',
  '1,0',
  '1,00',
  '1,000',
  '1,000,',
  '1,0000',
  '1,000,000',
  '1,000,000,000',
];
const negativeCases = [
  '',
  '.',
  '..',
  'a',
  '1..',
  '1.000',
  '1e1',
  '1a1',
  '1,000,000.000',
];

describe('Money input string', () => {

  describe('should be valid', () => {
    it.each(positiveCases)('%s', (numberStr) => {
      expect(isMoneyInputValid(numberStr)).toBeTruthy();
    });
  });
  describe('should be invalid', () => {
    it.each(negativeCases)('%s', (numberStr) => {
      expect(isMoneyInputValid(numberStr)).toBeFalsy();
    });
  });
});
