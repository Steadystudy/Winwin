import JudgeRoom from 'feature/JudgeRoom';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import React from 'react';

export default function RoomJudgePage({ params }: { params: Params }) {
  const { id } = params;

  return <JudgeRoom betId={Number(id)} />;
}
