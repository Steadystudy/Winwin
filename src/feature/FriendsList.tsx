'use client';

import { Flex, Input } from 'antd';
import AvatarProfile from '../components/AvatarProfile';
import { InviteTypes, User } from 'types';
import { useInviteMembers } from 'hooks/useInviteMembers';
import { ChangeEvent, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { debounce } from 'utils/debounce';

const tempUsers = [
  { id: 1, name: '아무' },
  { id: 2, name: '개' },
  { id: 3, name: '나비' },
  { id: 4, name: '나비' },
  { id: 5, name: '나비' },
];

interface FriendsListProps {
  invite: InviteTypes;
}

export default function FriendsList({ invite }: FriendsListProps) {
  const { selectedUsers, updateSelectedUsers } = useInviteMembers(invite);
  const [users, setUsers] = useState<User[]>(tempUsers);

  const isChecked = (id: number) => {
    const filtered = selectedUsers.filter((user) => user.id === id);
    return filtered.length > 0 ? true : false;
  };

  const updateNewUsers = (e: ChangeEvent<HTMLInputElement>, user: User) => {
    const newUsers = e.target.checked
      ? [...selectedUsers, user]
      : selectedUsers.filter((u) => u.id !== user.id);
    updateSelectedUsers(newUsers);
  };

  const searchUser = debounce((e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    const filtered = name === '' ? tempUsers : tempUsers.filter((user) => user.name.includes(name));
    setUsers(filtered);
  }, 500);

  return (
    <section>
      <Input
        variant="outlined"
        className="w-8"
        prefix={<UserOutlined />}
        placeholder="이름 검색"
        onChange={(e) => searchUser(e)}
      />
      {users.length > 0 ? (
        <Flex vertical gap={16} className="h-70vh overflow-y-auto p-8">
          {users.map((user) => (
            <Flex key={user.id} justify="space-between" align="center" className="">
              <label htmlFor={`check${user.id}`}>
                <Flex align="center" gap={16}>
                  <AvatarProfile />
                  <span>{user.name}</span>
                </Flex>
              </label>
              <input
                id={`check${user.id}`}
                width={24}
                height={24}
                type="checkbox"
                checked={isChecked(user.id)}
                onChange={(e) => {
                  updateNewUsers(e, user);
                }}
                style={{
                  width: '2rem',
                  height: '2rem',
                  borderColor: '#dddddd',
                }}
                className="rounded-full"
              />
            </Flex>
          ))}
        </Flex>
      ) : (
        <div>친구가 없습니다</div>
      )}
    </section>
  );
}
