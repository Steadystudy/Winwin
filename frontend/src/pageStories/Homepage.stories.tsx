import type { Meta, StoryObj } from '@storybook/react';

import Homepage from '../app/page';

const meta: Meta<typeof Homepage> = {
  component: Homepage,
  title: 'Pages/Homepage',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Homepage>;

export const Default: Story = {
  args: {},
};
