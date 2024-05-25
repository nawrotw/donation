import { differenceInMonths } from "date-fns";

// TODO ask about calculation logic (included/excluded) + write tests
export const calcMonthsCount = (endDate: Date, startDate: Date = new Date()) => {
  return  differenceInMonths(endDate, startDate);
}
