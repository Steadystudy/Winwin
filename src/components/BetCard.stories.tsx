import type { Meta, StoryObj } from '@storybook/react';

import BetCard from './BetCard';

const meta: Meta<typeof BetCard> = {
  component: BetCard,
  title: 'Components/BetCard',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof BetCard>;

export const Default: Story = {
  args: {},
};
