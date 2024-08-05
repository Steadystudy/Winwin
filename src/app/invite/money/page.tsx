import { Input } from 'antd';
import FriendsList from 'components/FriendsList';
import InviteNav from 'components/InviteNav';
import SelectedInviteUsers from 'components/SelectedInviteUsers';

export default function InputMoneypage() {
  return (
    <>
      <InviteNav from="/invite/judge" to="/">
        채팅 금액 입력
      </InviteNav>
      <h2>금액 입력</h2>
      <Input placeholder="금액을 입력해주세요" />
    </>
  );
}
