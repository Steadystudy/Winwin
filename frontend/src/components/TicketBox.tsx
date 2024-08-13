'use client';

import React, { ReactNode } from 'react';

type Size = 'small' | 'large';
type Game = 'solo' | 'team';

interface TicketBoxProps {
  size?: Size;
  game: Game;
  children: ReactNode;
}

export default function TicketBox({ size = 'small', game = 'solo', children }: TicketBoxProps) {
  let parentSize = 'w-20 h-6';
  let circleSize = 'w-1 h-2';

  switch (size) {
    case 'large':
      parentSize = 'w-80 h-32';
      circleSize = 'w-4 h-8';
      break;
    case 'small':
      parentSize = 'w-20 h-8';
      circleSize = 'w-1 h-2';
      break;
    default:
  }

  return (
    <div
      className={`relative ${game == 'solo' ? 'bg-blue200' : 'bg-orange100'} ${parentSize} rounded-md flex justify-center items-center`}
    >
      <div
        className={`absolute left-0 ${circleSize} top-1/2 transform -translate-y-1/2 bg-background rounded-r-full `}
      ></div>
      {children}
      <div
        className={`absolute right-0 ${circleSize} top-1/2 transform -translate-y-1/2 bg-background rounded-l-full`}
      ></div>
    </div>
  );
}
