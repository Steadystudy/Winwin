'use client';

import { Flex } from 'antd';
import AvatarProfile from './AvatarProfile';
import { User } from 'types';

interface BetCardProps {
  myTeam: User[]; // 유저 배열
  opponentTeam: User[]; // 유저배열
  betMoney: number;
  title: string;
}

export default function BetCard() {
  return (
    <Flex className="w-[90%] h-36 bg-blue300 rounded-lg" wrap>
      <Flex align="center" className="w-1/3 pl-2">
        <AvatarProfile name="김아무" />
      </Flex>
      <Flex vertical className="w-1/3 items-center justify-center gap-8 text-center">
        <h2 className="w-full font-semibold text-2xl text-white truncate">골프 내기</h2>
        <h3 className="w-full font-semibold text-xl text-white truncate">100,000원</h3>
      </Flex>
      <Flex align="center" className="w-1/3 pr-2 justify-end">
        <AvatarProfile name="이아무" />
      </Flex>
    </Flex>
  );
}
