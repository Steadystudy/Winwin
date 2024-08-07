import RoomProgress from 'feature/RoomProgress';
import RoomResult from 'feature/RoomResult';
import React from 'react';

export default async function RoomPage() {
  const progress = false;

  return <>{progress ? <RoomProgress /> : <RoomResult />}</>;
}
