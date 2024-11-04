import type { Meta, StoryObj } from '@storybook/react';

import { BaseButton } from './';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Base/BaseButton',
  component: BaseButton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BaseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    text: 'Default Button',
  },
};
