import type { Meta, StoryObj } from '@storybook/react';
import { MoneyInputStory } from "./MoneyInputStory.tsx";
import { themeWrapper } from "../../utils/themeWrapper.tsx";

const meta = {
  title: 'Components/MoneyInput',
  component: themeWrapper(MoneyInputStory),
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MoneyInputStory>;

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
