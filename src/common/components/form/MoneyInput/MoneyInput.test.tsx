import { render, cleanup, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { MoneyInput } from "./MoneyInput.tsx";
import { parseFormatInputString } from "./moneyInputUtils.ts";


const setup = (amount: number) => {
  const renderResult = render(
    <MoneyInput
      data-testid='moneyInput'
      amount={amount}
      onAmountChange={vi.fn()}
    />
  );

  return {
    ...renderResult,
    inputValue: screen.getByTestId('moneyInput').querySelector('input')?.value
  }
}

const cases = [
  { number: 0, inputStr: '0'},
  { number: 1, inputStr: '1'},
  { number: 10, inputStr: '10'},
  { number: 100, inputStr: '100'},
  { number: 1000, inputStr: '1,000'},
  { number: 1000.11, inputStr: '1,000.11'},
];


describe("MoneyInput", () => {

  afterEach(cleanup);

  describe('should render proper date', () => {
    it.each(cases)('$number => $inputStr', ({number, inputStr}) => {
      const {inputValue} = setup(number);
      expect(inputValue).toEqual(inputStr);
    });
  });


});

const parseInputCases = [
  {inputStr: '0', number: 0, formattedStr: '0'},
  {inputStr: '1.', number: 1, formattedStr: '1.'},
  {inputStr: '1.0', number: 1, formattedStr: '1.0'},
  {inputStr: '1.00', number: 1, formattedStr: '1.00'},
  {inputStr: '1.1', number: 1.1, formattedStr: '1.1'},
  {inputStr: '1.11', number: 1.11, formattedStr: '1.11'},
  {inputStr: '10', number: 10, formattedStr: '10'},
  {inputStr: '10,000.12', number: 10000.12, formattedStr: '10,000.12'},
];
describe('Input parsing and re-formatting', () => {
  it.each(parseInputCases)('$inputStr', ({inputStr, number, formattedStr}) => {
    expect(parseFormatInputString(inputStr)).toEqual({number, formattedStr});
  });
});
