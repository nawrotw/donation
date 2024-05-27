import type { Meta, StoryObj } from '@storybook/react';
import { DonationForm } from "../pages/donationPage/components/DonationForm.tsx";
import { themeWrapper } from "./utils/themeWrapper.tsx";

const meta = {
  title: 'DonationComponents/Form',
  component: themeWrapper(DonationForm),
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DonationForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Form: Story = {
  args: {
    amount: 10,
    date: new Date(),
    onAmountChange: () => {},
    onDateChange: () => {}
  }
};

