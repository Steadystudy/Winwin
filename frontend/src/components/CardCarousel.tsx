'use client';

import { Carousel } from 'antd';
import BetCard from './BetCard';

export default function CardCarousel() {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

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
