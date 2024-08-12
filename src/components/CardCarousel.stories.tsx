import type { Meta, StoryObj } from '@storybook/react';

import CardCarousel from './CardCarousel';

const meta: Meta<typeof CardCarousel> = {
  component: CardCarousel,
  title: 'Components/CardCarousel',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof CardCarousel>;

export const Default: Story = {
  args: {},
};
