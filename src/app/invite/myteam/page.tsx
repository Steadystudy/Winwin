import FriendsList from 'feature/FriendsList';
import InviteNav from 'components/InviteNav';
import SelectedInviteUsers from 'feature/SelectedInviteUsers';
import { PAGE_URL } from 'constants/url';

export default function InviteMyTeampage() {
  return (
    <>
      <InviteNav from={PAGE_URL.HOME} to={PAGE_URL.INVITE_OPPONENT}>
        우리팀 초대
      </InviteNav>
      <SelectedInviteUsers invite={'myTeam'} />
      <FriendsList invite={'myTeam'} />
    </>
  );
}
