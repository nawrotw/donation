import type { Meta, StoryObj } from '@storybook/react';
import { DonationFormView } from "./DonationFormView.tsx";

const meta = {
  title: 'DonationComponents/Form',
  component: DonationFormView,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DonationFormView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Form: Story = {};

