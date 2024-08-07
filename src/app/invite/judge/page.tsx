import FriendsList from 'feature/FriendsList';
import NavInvite from 'components/NavInvite';
import SelectedInviteUsers from 'feature/SelectedInviteUsers';
import { PAGE_URL } from 'constants/url';

export default function InviteJudgepage() {
  return (
    <>
      <NavInvite from={PAGE_URL.INVITE_OPPONENT} to={PAGE_URL.ROOM_CREATE}>
        심판 초대
      </NavInvite>
      <SelectedInviteUsers invite={'judge'} />
      <FriendsList invite={'judge'} />
    </>
  );
}
