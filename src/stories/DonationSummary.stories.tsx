import type { Meta, StoryObj } from '@storybook/react';
import { DonationSummary } from "../pages/donationPage/components/DonationSummary.tsx";
import { themeWrapper } from "./utils/themeWrapper.tsx";

const meta = {
  title: 'DonationComponents/Summary',
  component: themeWrapper(DonationSummary),
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DonationSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Summary: Story = {
  args: {
    amount: 10,
    monthsCount: 1,
    totalDonation: 20
  }
};

