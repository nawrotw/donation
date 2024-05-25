import type { Meta, StoryObj } from '@storybook/react';
import { DonationSummary } from "../components/DonationSummary.tsx";

const meta = {
  title: 'DonationComponents/Summary',
  component: DonationSummary,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DonationSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Summary: Story = {
  args: {
    amount: 10,
    untilDate: new Date('2024-12-01')
  }
};

