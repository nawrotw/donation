import { differenceInMonths, roundToNearestHours } from "date-fns";

export const calcMonthsCount = (endDate: Date, startDate: Date = new Date()) => {
  // first we pick untilDate on UI, and later monthsCount is calculated using current Date, so current date sec/ms  > sec/ms of untilDate
  // so to be safe (in case of e.g day or month change if time would be 23:59:59.999) we need do some rounding
  return differenceInMonths(roundToNearestHours(endDate), roundToNearestHours(startDate));
}
