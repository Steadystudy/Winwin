import { Input } from 'antd';
import FriendsList from 'components/FriendsList';
import InviteNav from 'components/InviteNav';
import SelectedInviteUsers from 'components/SelectedInviteUsers';

export default function InviteMyTeampage() {
  return (
    <>
      <InviteNav from="/" to="/invite/opponent">
        우리팀 초대
      </InviteNav>
      <SelectedInviteUsers invite={'myTeam'} />
      <Input placeholder="이름 검색" />
      <FriendsList invite={'myTeam'} />
    </>
  );
}
