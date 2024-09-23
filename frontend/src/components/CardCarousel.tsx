'use client';

import { Carousel } from 'antd';
import BetCard from './BetCard';
import { useMe } from 'hooks/useMe';

export default function CardCarousel() {
  const { me } = useMe();
  console.log(me);

  const onChange = (currentSlide: number) => {};

  return (
    <>
      {me?.betsJoined && (
        <Carousel
          className="flex justify-center items-center w-full px-4 mx-auto"
          afterChange={onChange}
          draggable
          autoplay
        >
          {me?.betsJoined.map((bet) => <BetCard bet={bet} />)}
        </Carousel>
      )}
    </>
  );
}
