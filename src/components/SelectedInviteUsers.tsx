'use client';

import { Flex } from 'antd';
import AvatarProfile from './AvatarProfile';
import { InviteTypes, User } from 'types';
import { useInviteMembers } from 'hooks/useInviteMembers';

interface SelectedInviteUsersProps {
  invite: InviteTypes;
}

export default function SelectedInviteUsers({ invite }: SelectedInviteUsersProps) {
  const { selectedUsers, updateSelectedUsers } = useInviteMembers(invite);

  const handleAvatarClick = (id: number) => {
    const filter = selectedUsers.filter((user: User) => user.id !== id);
    updateSelectedUsers(filter);
  };

  return (
    <>
      {selectedUsers.length > 0 && (
        <Flex gap={8} className="w-80vw p-4 overflow-hidden overflow-x-auto">
          {selectedUsers.map(({ id, name }) => {
            return (
              <AvatarProfile
                onClick={() => {
                  handleAvatarClick(id);
                }}
                key={id}
                name={name}
                remove={true}
              ></AvatarProfile>
            );
          })}
        </Flex>
      )}
    </>
  );
}
