import { Bet, BetUser } from '__generated__/graphql';
import { Badge, Flex, Image } from 'antd';
import AvatarRow from 'components/AvatarRow';
import NavRoom from 'components/NavRoom';

interface RoomResultProps {
  bet: Partial<Bet> & { team1: BetUser[]; team2: BetUser[] };
}

export default function RoomResult({ bet }: RoomResultProps) {
  const { title, team1, team2, result, judge } = bet;
  const winner = result === 1 ? team1 : team2;

  return (
    <>
      <NavRoom>{title}</NavRoom>
      <section className="flex flex-col h-80vh p-8">
        <Flex justify="space-between">
          <Badge count={'win'} color="#1890FF">
            <Flex vertical align="center">
              <span>Team</span>
              <span>{team1[0]?.name}</span>
            </Flex>
          </Badge>
          <Image
            src={'/icons/Trophy.svg'}
            className={`${winner === team1 ? '-translate-x-8' : 'translate-x-8'}`}
            width={40}
            height={40}
            alt={'트로피'}
          />
          <Badge count={'lose'}>
            <Flex vertical align="center">
              <span>Team</span>
              <span className="text-end">{team2[0]?.name}</span>
            </Flex>
          </Badge>
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
            <span>{winner[0]?.name}팀 인당</span>
            <h2>100,000원</h2>
          </Flex>
        </Flex>
        <Flex vertical gap={8}>
          <h2>심판</h2>
          <AvatarRow gap={16} name={judge?.name} />
        </Flex>
      </section>
    </>
  );
}
