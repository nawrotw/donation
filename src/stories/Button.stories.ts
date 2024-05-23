import type { Meta, StoryObj } from '@storybook/react';
import { ButtonsView } from "./ButtonsView.tsx";

const meta = {
  title: 'Example/Button',
  component: ButtonsView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonsView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Buttons: Story = {};
Buttons.parameters = {
  pseudo: {
    hover: [".hover"],
    active: ".active",
  },
};
