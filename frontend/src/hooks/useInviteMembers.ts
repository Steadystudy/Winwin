import { User } from '__generated__/graphql';
import { useRoomStore } from 'store/useRoomStore';
import { InviteTypes } from 'types';

export const useInviteMembers = (
  invite: InviteTypes,
): { selectedUsers: User[]; updateSelectedUsers: Function } => {
  const { myTeam, updateMyteam, opponent, updateOpponent, judge, updateJudge } = useRoomStore();

  switch (invite) {
    case 'myTeam':
      return { selectedUsers: myTeam, updateSelectedUsers: updateMyteam };
    case 'opponent':
      return { selectedUsers: opponent, updateSelectedUsers: updateOpponent };
    case 'judge':
      return { selectedUsers: judge, updateSelectedUsers: updateJudge };
    default:
      return { selectedUsers: [], updateSelectedUsers: () => {} };
  }
};
