import { User } from 'types';
import { create } from 'zustand';

interface Store {
  selectedUsers: User[];
  updateSelectedUsers: (data: User[]) => void;
}

export const useOpponentStore = create<Store>((set, get) => ({
  selectedUsers: [],
  updateSelectedUsers: (newUsers: User[]) => {
    set(() => {
      return { selectedUsers: newUsers };
    });
  },
}));
