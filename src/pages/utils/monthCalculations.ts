import { differenceInMonths } from "date-fns";

// TODO ask about calculation logic (included/excluded) + write tests
// what to do with current month? should <today, today+1month> be treated as 1?
export const calcMonthsCount = (endDate: Date, startDate: Date = new Date()) => {
  return  differenceInMonths(endDate, startDate);
}
