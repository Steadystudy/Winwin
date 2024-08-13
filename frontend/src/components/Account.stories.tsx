import type { Meta, StoryObj } from '@storybook/react';

import Account from './Account';
import { Flex } from 'antd';

const meta: Meta<typeof Account> = {
  component: Account,
  title: 'Components/Account',
  tags: ['autodocs'],
  render: () => {
    return (
      <Flex justify="center" className="py-10">
        <Account />
      </Flex>
    );
  },
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Account>;

export const Default: Story = {
  args: {},
};
