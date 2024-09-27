'use client';

import { BetStatus } from '__generated__/graphql';
import BottomBar from 'components/BottomBar';
import CardCarousel from 'components/CardCarousel';
import HomeHeader from 'feature/HomeHeader';
import { useMe } from 'hooks/useMe';

export default function Homepage() {
  const { me } = useMe();
  const judgeBets = me?.betsJudged || [];
  const endedBets = me?.betsJoined?.filter((bet) => bet.status === BetStatus.Done) || [];
  const bettingBets = me?.betsJoined?.filter((bet) => bet.status === BetStatus.Betting) || [];
  const bettedBets = me?.betsJoined?.filter((bet) => bet.status === BetStatus.Betted) || [];

  return (
    <div>
      <HomeHeader me={me} />
      {bettingBets.length > 0 && <CardCarousel title="입금 대기 내기" betsArray={bettingBets} />}
      {bettedBets.length > 0 && <CardCarousel title="심판 대기 내기" betsArray={bettedBets} />}
      {judgeBets.length > 0 && <CardCarousel title="심판 할 내기" judge betsArray={judgeBets} />}
      {endedBets.length > 0 && <CardCarousel title="끝난 내기" betsArray={endedBets} />}
      <BottomBar />
    </div>
  );
}
