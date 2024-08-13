import { User } from 'types';
import { create } from 'zustand';

type State = {
  // title: string;
  // description?: string;
  myTeam: User[];
  opponent: User[];
  judge: User[];
  // money: number;
};
type Actions = {
  // setTitle: (title: string) => void;
  // setDescription: (description?: string) => void;
  updateMyteam: (data: User[]) => void;
  updateOpponent: (data: User[]) => void;
  updateJudge: (data: User[]) => void;
  reset: () => void;
  // setMoney: (money: number) => void;
};

export const initialState: State = {
  // title: '',
  // description: '',
  myTeam: [],
  opponent: [],
  judge: [],
  // money: 10000,
};

export const useRoomStore = create<State & Actions>((set, get) => ({
  ...initialState,
  // setTitle: (title: string) => {
  //   set(() => {
  //     return { title };
  //   });
  // },
  // setDescription: (description?: string) => {
  //   set(() => {
  //     return { description };
  //   });
  // },
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
  // setMoney: (money: number) => {
  //   set(() => {
  //     return { money };
  //   });
  // },
  reset: () => {
    set(initialState);
  },
}));
