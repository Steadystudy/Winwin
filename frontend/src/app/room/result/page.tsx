import RoomProgress from 'feature/RoomProgress';
import RoomResult from 'feature/RoomResult';

export default function ResultPage({ progress = false }) {
  return <div>{progress ? <RoomProgress /> : <RoomResult />}</div>;
}
