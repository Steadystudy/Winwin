'use client';

import { Flex } from 'antd';
import AvatarProfile from './AvatarProfile';
import { Bet, BetStatus } from '__generated__/graphql';
import { memo } from 'react';
import { priceToString } from 'hooks/priceFormat';

interface BetCardProps {
  bet: Bet;
  onClick: () => void;
}

const BetCard = ({ bet, onClick }: BetCardProps) => {
  const { title, teams, totalAmount, status, result, judge } = bet;
  const team1 = teams?.filter((team) => team.team === 1) || [];
  const team2 = teams?.filter((team) => team.team === 2) || [];

  let cardColor;
  switch (status) {
    case BetStatus.Betting:
      cardColor = 'bg-green-500 shine';
      break;
    case BetStatus.Betted:
      cardColor = 'bg-gradient-to-r from-yellow-300 to-yellow-500 shine';
      break;
    case BetStatus.Canceled:
      cardColor = 'bg-red-500';
      break;
    case BetStatus.Done:
      cardColor = 'bg-blue300';
      break;
    default:
      cardColor = 'bg-black';
  }

  return (
    <Flex
      onClick={onClick}
      justify="center"
      align="center"
      className={`w-full h-36 ${cardColor} border  cursor-pointer`}
      wrap
    >
      <Flex align="center" className="w-1/3 pl-2">
        {team1.map(({ name, id }) => (
          <AvatarProfile key={id} name={name} />
        ))}
      </Flex>
      <Flex vertical className="w-1/3 items-center justify-center gap-8 text-center">
        <h2 className="w-full font-semibold text-2xl text-white truncate">{title}</h2>
        <h3 className="w-full font-semibold text-xl text-white truncate">
          {totalAmount && priceToString(totalAmount)}원
        </h3>
      </Flex>
      <Flex align="center" className="w-1/3 pr-2 justify-end">
        {team2.map(({ name, id }) => (
          <AvatarProfile key={id} name={name} />
        ))}
      </Flex>
    </Flex>
  );
};

export default memo(BetCard);
