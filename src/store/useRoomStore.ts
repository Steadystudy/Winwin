import { User } from 'types';
import { create } from 'zustand';

interface RoomStore {
  myTeam: User[];
  opponent: User[];
  judge: User[];
  money: number;

  updateMyteam: (data: User[]) => void;
  updateOpponent: (data: User[]) => void;
  updateJudge: (data: User[]) => void;
  setMoney: (money: number) => void;
}

export const useRoomStore = create<RoomStore>((set, get) => ({
  myTeam: [],
  opponent: [],
  judge: [],
  money: 0,
  updateMyteam: (newUsers: User[]) => {
    set(() => {
      return { myTeam: newUsers };
    });
  },
  updateOpponent: (newUsers: User[]) => {
    set(() => {
      return { opponent: newUsers };
    });
  },
  updateJudge: (newUsers: User[]) => {
    set(() => {
      return { judge: newUsers };
    });
  },
  setMoney: (money: number) => {
    set(() => {
      return { money };
    });
  },
}));
