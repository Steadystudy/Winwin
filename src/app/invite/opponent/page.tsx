import FriendsList from 'feature/FriendsList';
import InviteNav from 'components/InviteNav';
import SelectedInviteUsers from 'feature/SelectedInviteUsers';
import { PAGE_URL } from 'constants/url';

export default function InviteOpponentpage() {
  return (
    <>
      <InviteNav from={PAGE_URL.INVITE_MYTEAM} to={PAGE_URL.INVITE_JUDGE}>
        상대팀 초대
      </InviteNav>
      <SelectedInviteUsers invite={'opponent'} />
      <FriendsList invite={'opponent'} />
    </>
  );
}
