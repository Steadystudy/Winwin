import { useJudgeStore } from 'store/useJudgeStore';
import { useMyteamStore } from 'store/useMyteamStore';
import { useOpponentStore } from 'store/useOpponentStore';
import { InviteTypes } from 'types';

export const useInviteMembers = (invite: InviteTypes) => {
  const { selectedUsers, updateSelectedUsers } =
    invite === 'myTeam'
      ? useMyteamStore()
      : invite === 'opponent'
        ? useOpponentStore()
        : useJudgeStore();

  return { selectedUsers, updateSelectedUsers };
};
