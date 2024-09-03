'use client';

import { Flex, Input } from 'antd';
import { InviteTypes } from 'types';
import { useInviteMembers } from 'hooks/useInviteMembers';
import { ChangeEvent, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { debounce } from 'utils/debounce';
import AvatarRow from 'components/AvatarRow';
import { useMe } from 'hooks/useMe';
import { User } from '__generated__/graphql';

interface FriendsListProps {
  invite: InviteTypes;
}

export default function FriendsList({ invite }: FriendsListProps) {
  const { me, error, loading } = useMe();
  const { selectedUsers, updateSelectedUsers } = useInviteMembers(invite);
  const [users, setUsers] = useState<User[]>(me?.friends || []);

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
    const filtered = name === '' ? users : users.filter((user) => user.name.includes(name));
    setUsers(filtered);
  }, 500);

  return (
    <section className="flex flex-col items-center mt-4">
      <Input
        variant="outlined"
        className="w-[80%] border-b-2 p-2"
        prefix={<UserOutlined className="mr-1" />}
        placeholder="이름 검색"
        onChange={(e) => searchUser(e)}
      />
      {users.length > 0 ? (
        <Flex vertical gap={16} className="w-full h-70vh overflow-y-auto p-8">
          {users.map((user) => (
            <Flex key={user.id} justify="space-between" align="center" className="">
              <label htmlFor={`check${user.id}`}>
                <AvatarRow gap={16} name={user.name} />
              </label>
              <input
                id={`check${user.id}`}
                type="checkbox"
                checked={isChecked(user.id)}
                onChange={(e) => {
                  updateNewUsers(e, user);
                }}
                className="w-6 h-6 border-gray-300 rounded-full"
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
