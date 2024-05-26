import { render, cleanup, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi, beforeEach } from "vitest";
import { DateInput } from "./DateInput.tsx";
import userEvent from '@testing-library/user-event'

describe("DateInput", () => {

  afterEach(cleanup);

  it("should render proper date", () => {

    const { rerender } = render(
      <DateInput
        date={new Date('2024-05-01T00:00:00.000Z')}
        onDateChange={vi.fn()}
      />
    );

    expect(screen.getByText("May")).toBeDefined();
    expect(screen.getByText("2024")).toBeDefined();

    rerender(
      <DateInput
        date={new Date('2024-06-01T00:00:00.000Z')}
        onDateChange={vi.fn()}
      />
    );

    expect(screen.getByText("June")).toBeDefined();
    expect(screen.getByText("2024")).toBeDefined();
  });

  it("should update next month", async () => {
    const user = userEvent.setup();
    const onDateChange = vi.fn();
    render(
      <DateInput
        date={new Date('2024-01-03T13:15:28.123Z')}
        onDateChange={onDateChange}
      />
    );

    await user.click(screen.getByTestId("nextMonth"));
    expect(onDateChange).toHaveBeenCalledWith(new Date('2024-02-03T13:15:28.123Z'));
  });

  it("should update prev month", async () => {
    const user = userEvent.setup();
    const onDateChange = vi.fn();
    render(
      <DateInput
        date={new Date('2024-01-03T13:15:28.123Z')}
        onDateChange={onDateChange}
        onlyFutureMonths={false}
      />
    );

    await user.click(screen.getByTestId("prevMonth"));
    expect(onDateChange).toHaveBeenCalledWith(new Date('2023-12-03T13:15:28.123Z'));
  });

  describe('can decreasing month', () => {

    const changeMonthConfig = [
      { now: '2024-01-03T13:00:00.001Z', date: '2024-01-03T00:00:00.000Z', isEnabled: false },
      { now: '2024-01-03T13:00:00.001Z', date: '2024-02-03T00:00:00.000Z', isEnabled: false },
      { now: '2024-01-03T13:00:00.001Z', date: '2024-03-03T00:00:00.000Z', isEnabled: true },
    ];

    beforeEach(() => {
      vi.useFakeTimers();
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it.each(changeMonthConfig)('$isEnabled - $date', ({ now, date, isEnabled }) => {
      vi.setSystemTime(new Date(now));
      render(
        <DateInput
          date={new Date(date)}
          onDateChange={vi.fn()}
          onlyFutureMonths={true}
        />
      );

      expect(screen.getByTestId("prevMonth")).toHaveProperty('disabled', !isEnabled);
    });
  });
});
