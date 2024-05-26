import type { Meta, StoryObj } from '@storybook/react';
import { DonationSummary, DonationSummaryProps } from "../components/DonationSummary.tsx";
import { ThemeProvider } from "@emotion/react";
import { defaultTheme } from "../styles/theme.ts";

const DonationStory = (props: DonationSummaryProps) => {

  return (
    <ThemeProvider theme={defaultTheme}>
      <DonationSummary {...props}/>
    </ThemeProvider>
  );
};


const meta = {
  title: 'DonationComponents/Summary',
  component: DonationStory,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DonationStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Summary: Story = {
  args: {
    amount: 10,
    monthsCount: 1,
    totalDonation: 20
  }
};

