import FriendsList from 'feature/FriendsList';
import InviteNav from 'components/InviteNav';
import SelectedInviteUsers from 'feature/SelectedInviteUsers';
import { PAGE_URL } from 'constants/url';

export default function InviteJudgepage() {
  return (
    <>
      <InviteNav from={PAGE_URL.INVITE_OPPONENT} to={PAGE_URL.ROOM_CREATE}>
        심판 초대
      </InviteNav>
      <SelectedInviteUsers invite={'judge'} />
      <FriendsList invite={'judge'} />
    </>
  );
}
