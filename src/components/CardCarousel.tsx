'use client';

import { Carousel } from 'antd';
import BetCard from './BetCard';

export default function CardCarousel() {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel
      className="w-full h-40 px-4 mx-auto flex justify-center items-center"
      afterChange={onChange}
      draggable={true}
    >
      <BetCard />
      <BetCard />
      <BetCard />
    </Carousel>
  );
}
