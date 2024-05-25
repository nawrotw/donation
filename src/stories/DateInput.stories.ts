import type { Meta, StoryObj } from '@storybook/react';
import { DateInputStory } from "./DateInputStory.tsx";

const meta = {
  title: 'Components/DateInput',
  component: DateInputStory,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DateInputStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DateInput: Story = {};
DateInput.parameters = {
  pseudo: {
    hover: [".hover"],
    active: ".active",
  },
};
