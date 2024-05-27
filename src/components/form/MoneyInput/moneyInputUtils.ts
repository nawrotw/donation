import { isMoneyInputValid, parseMoney, formatNumber, DECIMAL_SEPARATOR } from "../../../common/domain/money/moneyUtils.ts";

export interface ParseFormatResponse {
  number: number;
  formattedStr: string;
}

const fractionPostfixExp = new RegExp(`\\${DECIMAL_SEPARATOR}0{0,2}$`);

export const parseFormatInputString = (valueStr: string): ParseFormatResponse | undefined => {

  if (valueStr === '') {
    return {
      number: 0,
      formattedStr: ''
    };
  }

  if (!isMoneyInputValid(valueStr)) {
    return;
  }
  const number = parseMoney(valueStr);

  if (isNaN(number)) {
    // this should not happen - it is just a precaution if isMoneyValueValid would miss some pattern
    return;
  }

  // parseMoney will remove umber un-significant fraction part from str: ['.', '.0', '.00'] - we don't want to remove it from string input.
  const fractionStr = fractionPostfixExp.exec(valueStr)?.[0] || '';
  const formattedStr = formatNumber(number) + fractionStr;

  return { number, formattedStr }
}
