import type { Meta, StoryObj } from '@storybook/react';

import TicketBox from './TicketBox';

const meta: Meta<typeof TicketBox> = {
  component: TicketBox,
  title: 'Components/TicketBox',
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['small', 'large'],
    },
    game: {
      options: ['solo', 'team'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof TicketBox>;

export const Solo: Story = {
  args: {
    game: 'solo',
    children: <span>개인전</span>,
  },
};

export const Team: Story = {
  args: {
    game: 'team',
    children: <span>팀전</span>,
  },
};
