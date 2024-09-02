'use client';

import { Carousel } from 'antd';
import BetCard from './BetCard';
import { gql, useMutation, useQuery } from '@apollo/client';

export default function CardCarousel() {
  const onChange = (currentSlide: number) => {};

  return (
    <Carousel
      className="flex justify-center items-center w-full px-4 mx-auto"
      afterChange={onChange}
      draggable
      autoplay
    >
      <BetCard />
      <BetCard />
      <BetCard />
    </Carousel>
  );
}
