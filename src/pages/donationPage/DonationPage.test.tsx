import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, beforeEach, vi } from "vitest";
import userEvent from '@testing-library/user-event'
import { DonationPage } from "./DonationPage.tsx";

const getAmountInput = () => screen.getByLabelText('I can donate') as HTMLInputElement;
const getUntilMonthInput = () => screen.getByTestId('dateInput');
const getDonationTotalAmount = () => screen.getByTestId('donationTotalAmount');
const getDonationSummary = () => screen.getByTestId('donationSummary');

describe("DateInput", () => {

  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    vi.setSystemTime(new Date('2024-05-01'));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should render proper values", async () => {
    const user = userEvent.setup();
    render(<DonationPage/>);

    expect(getAmountInput()).toHaveValue('25,000');

    expect(getDonationTotalAmount()).toHaveTextContent('Total amount$50,000.00');
    expect(getDonationSummary()).toHaveTextContent('You will be sending $25,000.00 every month, until June 2024. Thank you!');

    await userEvent.clear(getAmountInput());
    await user.type(getAmountInput(), '500.11');

    expect(getAmountInput()).toHaveValue('500.11');
    expect(getDonationTotalAmount()).toHaveTextContent('Total amount$1,000.22');
    expect(getDonationSummary()).toHaveTextContent('You will be sending $500.11 every month, until June 2024. Thank you!');
  });

  it("should update on amount change", async () => {
    const user = userEvent.setup();
    render(<DonationPage/>);

    await userEvent.clear(getAmountInput());
    await user.type(getAmountInput(), '500.11');

    expect(getAmountInput()).toHaveValue('500.11');
    expect(getUntilMonthInput()).toHaveTextContent('June2024')
    expect(getDonationTotalAmount()).toHaveTextContent('Total amount$1,000.22');
    expect(getDonationSummary()).toHaveTextContent('You will be sending $500.11 every month, until June 2024. Thank you!');
  });

  it("should update on until change", async () => {
    const user = userEvent.setup();
    render(<DonationPage/>);

    await user.click(screen.getByTestId("nextMonth")); // linter test remove async

    expect(getAmountInput()).toHaveValue('25,000');
    expect(getUntilMonthInput()).toHaveTextContent('July2024')
    expect(getDonationTotalAmount()).toHaveTextContent('Total amount$75,000.00');
    expect(getDonationSummary()).toHaveTextContent('You will be sending $25,000.00 every month, until July 2024. Thank you!');
  });
});
