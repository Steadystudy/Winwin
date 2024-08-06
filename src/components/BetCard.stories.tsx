import type { Meta, StoryObj } from '@storybook/react';

import BetCard from './BetCard';
import { Flex } from 'antd';

const meta: Meta<typeof BetCard> = {
  component: BetCard,
  title: 'Components/BetCard',
  tags: ['autodocs'],
  render: () => {
    return (
      <Flex justify="center" className="py-10">
        <BetCard />
      </Flex>
    );
  },
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof BetCard>;

export const Default: Story = {
  args: {},
};
