'use client';

import { BetStatus } from '__generated__/graphql';
import RoomBetting from 'feature/RoomBetting';
import RoomProgress from 'feature/RoomProgress';
import RoomResult from 'feature/RoomResult';
import { useBetRoom } from 'hooks/useBetRoom';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

export default function RoomPage({ params }: { params: Params }) {
  const { id } = params;
  const { bet } = useBetRoom({ betId: id });
  const progress = bet?.status;

  return (
    <>
      {progress === BetStatus.Done ? (
        <RoomResult betInfo={bet} />
      ) : progress === BetStatus.Betting ? (
        <RoomBetting betInfo={bet} />
      ) : (
        <RoomProgress betInfo={bet} />
      )}
    </>
  );
}
