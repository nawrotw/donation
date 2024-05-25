import { describe, it, expect } from "vitest";
import { calcMonthsCount } from "./monthCalculations.ts";
import { roundToNearestHours } from "date-fns";

const config = [
  { startDate: '2024-05-01T00:00:00.000Z', untilDate: '2024-06-01T00:00:00.000Z', monthsCount: 1 },
  // cornerCase(rounding) - User click MonthInput at 2024-05-31T23:59:59.999Z - calculations are done a bit later - meaning - we are on the next month!
  { startDate: '2024-05-01T00:00:00.000Z', untilDate: '2024-05-31T23:59:59.980Z', monthsCount: 1 },
  { startDate: '2024-05-01T00:00:01.123Z', untilDate: '2024-06-01T00:00:00.000Z', monthsCount: 1 },
  { startDate: '2024-05-01T00:00:00.000Z', untilDate: '2024-06-12T00:00:00.000Z', monthsCount: 1 },
  { startDate: '2024-05-01T00:00:00.000Z', untilDate: '2024-09-12T00:00:00.000Z', monthsCount: 4 },
  { startDate: '2024-05-01T00:00:00.000Z', untilDate: '2025-05-12T00:00:00.000Z', monthsCount: 12 },
]

describe('MonthCalculations', () => {
  it.each(config)('count: $monthsCount, [$startDate, $untilDate]', ({ startDate, untilDate, monthsCount }) => {
    expect(calcMonthsCount(new Date(untilDate), new Date(startDate))).toEqual(monthsCount);
  });
});

it('should properly round hours', () => {
  const roundedHour = roundToNearestHours(new Date('2025-05-31T23:59:59.980Z'));
  expect(roundedHour).toEqual(new Date('2025-06-01T00:00:00.000Z'));
});
