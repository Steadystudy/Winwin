import { Input } from 'antd';
import FriendsList from 'components/FriendsList';
import InviteNav from 'components/InviteNav';
import SelectedInviteUsers from 'components/SelectedInviteUsers';

export default function InviteOpponentpage() {
  return (
    <>
      <InviteNav from="/invite/myteam" to="/invite/judge">
        상대팀 초대
      </InviteNav>
      <SelectedInviteUsers invite={'opponent'} />
      <Input placeholder="이름 검색" />
      <FriendsList invite={'opponent'} />
    </>
  );
}
