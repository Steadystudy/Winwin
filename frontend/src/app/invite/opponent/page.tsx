import FriendsList from 'feature/FriendsList';
import NavInvite from 'components/NavInvite';
import SelectedInviteUsers from 'feature/SelectedInviteUsers';
import { PAGE_URL } from 'constants/url';

export default function InviteOpponentpage() {
  return (
    <>
      <NavInvite invite="opponent" from={PAGE_URL.INVITE_MYTEAM} to={PAGE_URL.INVITE_JUDGE}>
        상대팀 초대
      </NavInvite>
      <SelectedInviteUsers invite={'opponent'} />
      <FriendsList invite={'opponent'} />
    </>
  );
}
