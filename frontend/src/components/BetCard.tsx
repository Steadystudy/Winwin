'use client';

import { Flex } from 'antd';
import AvatarProfile from './AvatarProfile';
import { User } from 'types';
import { Bet } from '__generated__/graphql';

interface BetCardProps {
  bet: Bet;
}

export default function BetCard({ bet }: BetCardProps) {
  const { title, teams, totalAmount, status, result } = bet;
  const team1 = teams.filter((team) => team.team === 1);
  const team2 = teams.filter((team) => team.team === 2);

  return (
    <Flex
      justify="center"
      align="center"
      className="w-full h-36 bg-blue300 border border-blue100"
      wrap
    >
      <Flex align="center" className="w-1/3 pl-2">
        {team1.map(({ name, id }) => (
          <AvatarProfile key={id} name={name} />
        ))}
      </Flex>
      <Flex vertical className="w-1/3 items-center justify-center gap-8 text-center">
        <h2 className="w-full font-semibold text-2xl text-white truncate">{title}</h2>
        <h3 className="w-full font-semibold text-xl text-white truncate">{totalAmount}원</h3>
      </Flex>
      <Flex align="center" className="w-1/3 pr-2 justify-end">
        {team2.map(({ name, id }) => (
          <AvatarProfile key={id} name={name} />
        ))}
      </Flex>
    </Flex>
  );
}
