'use client';

import { Carousel, Flex } from 'antd';
import BetCard from './BetCard';
import { useMe } from 'hooks/useMe';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PAGE_URL } from 'constants/url';
import { Bet } from '__generated__/graphql';

interface CardCarouselProps {
  betsArray: Bet[];
  judge?: boolean;
  title: string;
}

export default function CardCarousel({ betsArray, title, judge = false }: CardCarouselProps) {
  const router = useRouter();

  const onChange = (currentSlide: number) => {};

  const handleCardClick = (bet: Bet) => {
    if (judge) {
      router.push(PAGE_URL.ROOM_JUDGE(bet.id));
    } else {
      router.push(PAGE_URL.ROOM(bet.id));
    }
  };

  return (
    <>
      <Flex justify="space-between" align="center" className=" px-4">
        <h2 className="text-2xl font-bold">
          {title} ({betsArray?.length})
        </h2>
        <Link href={'/'}>더보기</Link>
      </Flex>
      {
        <Carousel
          className="flex justify-center items-center w-full px-4 mx-auto"
          afterChange={onChange}
          draggable
          autoplay
        >
          {betsArray.map((bet, idx) => (
            <BetCard
              onClick={() => {
                handleCardClick(bet);
              }}
              key={idx + '$'}
              bet={bet}
            />
          ))}
        </Carousel>
      }
    </>
  );
}
