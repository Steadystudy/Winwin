import type { Meta, StoryObj } from '@storybook/react';

import NotFound from './NotFound';

const meta: Meta<typeof NotFound> = {
  component: NotFound,
  title: 'Features/NotFound',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof NotFound>;

export const Default: Story = {
  args: {},
};
