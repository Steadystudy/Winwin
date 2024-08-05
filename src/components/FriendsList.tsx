'use client';

import { Flex, Checkbox } from 'antd';
import AvatarProfile from './AvatarProfile';
import { InviteTypes, User } from 'types';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useInviteMembers } from 'hooks/useInviteMembers';

const users = [
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

  const isChecked = (id: number) => {
    const filtered = selectedUsers.filter((user) => user.id === id);
    return filtered.length > 0 ? true : false;
  };

  const onChange = (e: CheckboxChangeEvent, user: User) => {
    const newUsers = e.target.checked
      ? [...selectedUsers, user]
      : selectedUsers.filter((u) => u.id !== user.id);
    updateSelectedUsers(newUsers);
  };

  return (
    <section>
      {users.length > 0 ? (
        <Flex vertical className="h-70vh overflow-y-auto">
          {users.map((user) => (
            <Flex key={user.id} justify="space-between" align="center" className="px-6 py-4">
              <Flex align="center" gap={16}>
                <AvatarProfile />
                <span>{user.name}</span>
              </Flex>
              <Checkbox
                type="checkbox"
                checked={isChecked(user.id)}
                onChange={(e) => {
                  onChange(e, user);
                }}
                className="w-4 h-4 rounded-full"
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
