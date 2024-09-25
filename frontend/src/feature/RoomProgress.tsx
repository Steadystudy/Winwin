'use client';

import { Bet, BetUser, User } from '__generated__/graphql';
import { Button, Flex } from 'antd';
import AvatarProfile from 'components/AvatarProfile';
import AvatarRow from 'components/AvatarRow';
import NavRoom from 'components/NavRoom';
import { useBetRoom } from 'hooks/useBetRoom';
import Image from 'next/image';

interface RoomProgressProps {
  bet: Partial<Bet> & { team1: BetUser[]; team2: BetUser[] };
}

export default function RoomProgress({ bet }: RoomProgressProps) {
  const { team1, team2, judge, title, totalAmount, id } = bet;

  return (
    <>
      <NavRoom>{title}</NavRoom>
      <section className="flex flex-col h-80vh p-8">
        <Flex justify="space-between">
          <Flex vertical align="center">
            <span>Team</span>
            <span>{team1[0]?.name}</span>
          </Flex>
          <Image src={'/icons/Trophy.svg'} width={40} height={40} alt={'트로피'} />
          <Flex vertical align="center">
            <span>Team2</span>
            <span className="text-end">{team2[0]?.name}</span>
          </Flex>
        </Flex>
        <Flex>
          <Flex vertical className="w-2/5">
            <Flex vertical className="max-h-40 overflow-y-auto">
              {team1 &&
                team1.map(({ id, name }) => <AvatarRow size="small" name={name} key={id} />)}
            </Flex>
          </Flex>
          <Flex vertical justify="center" gap={10} align="center" className="w-1/5">
            <span>vs</span>
          </Flex>
          <Flex vertical align="end" className="w-2/5">
            <Flex vertical gap={4} className="max-h-40 overflow-y-auto">
              {team2 &&
                team2.map(({ id, name }) => <AvatarRow size="small" name={name} key={id} />)}
            </Flex>
          </Flex>
        </Flex>
        <Flex vertical gap={8}>
          <h2>상금</h2>
          <Flex align="center" justify="center">
            <h2>{totalAmount}원</h2>
          </Flex>
        </Flex>
        <Flex vertical gap={8}>
          <h2>심판</h2>
          <Flex align="center" gap={8} className="ml-8">
            <AvatarRow size="large" name={judge?.name} src={judge?.profileImg} />
          </Flex>
        </Flex>
        <Button className="absolute bottom-4 left-1/2 -translate-x-1/2 end font-bold text-2xl w-[75%] h-12 bg-blue300 text-white">
          내기중
        </Button>
      </section>
    </>
  );
}
