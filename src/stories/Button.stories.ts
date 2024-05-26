import type { Meta, StoryObj } from '@storybook/react';
import { ButtonsStory } from "./ButtonsStory.tsx";
import { themeWrapper } from "./utils/themeWrapper.tsx";

const meta = {
  title: 'Components/Buttons',
  component: themeWrapper(ButtonsStory),
  parameters: {
    layout: 'centered',
  },
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
