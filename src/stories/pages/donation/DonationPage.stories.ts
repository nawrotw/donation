import type { Meta, StoryObj } from '@storybook/react';
import { themeWrapper } from "../../utils/themeWrapper.tsx";
import { DonationPage as DonationPageFn } from "../../../pages/donationPage/DonationPage.tsx";

const meta = {
  title: 'Donation',
  component: themeWrapper(DonationPageFn),
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof DonationPageFn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DonationPage: Story = {};

