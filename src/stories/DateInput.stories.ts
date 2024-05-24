import type { Meta, StoryObj } from '@storybook/react';
import { DateInputView } from "./DateInputView.tsx";

const meta = {
  title: 'Components/DateInput',
  component: DateInputView,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DateInputView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DateInput: Story = {};
DateInput.parameters = {
  pseudo: {
    hover: [".hover"],
    active: ".active",
  },
};
