import FriendsList from 'feature/FriendsList';
import NavInvite from 'components/NavInvite';
import SelectedInviteUsers from 'feature/SelectedInviteUsers';
import { PAGE_URL } from 'constants/url';

export default function InviteMyTeampage() {
  return (
    <>
      <NavInvite invite="myTeam" from={PAGE_URL.HOME} to={PAGE_URL.INVITE_OPPONENT}>
        우리팀 초대
      </NavInvite>
      <SelectedInviteUsers invite={'myTeam'} />
      <FriendsList invite={'myTeam'} />
    </>
  );
}
