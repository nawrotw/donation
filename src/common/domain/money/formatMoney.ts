export const formatMoney = (money: number): string => {
  return isNaN(money) ? "---" : `$${money}`;
}
