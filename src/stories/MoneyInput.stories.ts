import type { Meta, StoryObj } from '@storybook/react';
import { MoneyInputView } from "./MoneyInputView.tsx";

const meta = {
  title: 'Components/MoneyInput',
  component: MoneyInputView,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MoneyInputView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MoneyInput: Story = {};
MoneyInput.parameters = {
  pseudo: {
    hover: [".hover"],
    focus: [".focus"],
    active: ".active",
  },
};
