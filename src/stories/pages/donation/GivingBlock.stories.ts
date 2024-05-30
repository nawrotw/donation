import type { Meta, StoryObj } from '@storybook/react';
import { themeWrapper } from "../../utils/themeWrapper.tsx";
import { GivingBlock as GivingBlockFn } from "../../../pages/donationPage/components/GivingBlock.tsx";

const meta = {
  title: 'Donation/Components/GivingBlock',
  component: themeWrapper(GivingBlockFn),
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof GivingBlockFn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GivingBlock: Story = {};

