import type { Meta, StoryObj } from '@storybook/react';
import { MoneyInputView } from "./MoneyInputView.tsx";

const meta = {
  title: 'Components/Inputs',
  component: MoneyInputView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MoneyInputView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MoneyInputs: Story = {};
MoneyInputs.parameters = {
  pseudo: {
    hover: [".hover"],
    focus: [".focus"],
    active: ".active",
  },
};
