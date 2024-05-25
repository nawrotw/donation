import type { Meta, StoryObj } from '@storybook/react';
import { ButtonsStory } from "./ButtonsStory.tsx";

const meta = {
  title: 'Components/Buttons',
  component: ButtonsStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonsStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Buttons: Story = {};
Buttons.parameters = {
  pseudo: {
    hover: [".hover"],
    active: ".active",
  },
};
