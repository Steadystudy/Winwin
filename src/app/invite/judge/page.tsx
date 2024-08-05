import { Input } from 'antd';
import FriendsList from 'components/FriendsList';
import InviteNav from 'components/InviteNav';
import SelectedInviteUsers from 'components/SelectedInviteUsers';

export default function InviteJudgepage() {
  return (
    <>
      <InviteNav from="/opponent" to="/invite/money">
        심판 초대
      </InviteNav>
      <SelectedInviteUsers invite={'judge'} />
      <Input placeholder="이름 검색" />
      <FriendsList invite={'judge'} />
    </>
  );
}
