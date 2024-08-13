'use client';

import { Alert, Flex } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ReactNode, useState } from 'react';
import LinkButton from './LinkButton';
import { useInviteMembers } from 'hooks/useInviteMembers';
import { InviteTypes } from 'types';

interface NavInviteProps {
  from?: string;
  to?: string;
  bgColor?: string;
  children: ReactNode;
  invite: InviteTypes;
}

export default function NavInvite({
  from = '#',
  to = '#',
  bgColor,
  invite,
  children,
}: NavInviteProps) {
  const router = useRouter();
  const [isAlert, useIsAlert] = useState(false);
  const { selectedUsers } = useInviteMembers(invite);

  const handleClick = () => {
    if (selectedUsers.length === 0) {
      useIsAlert(true);
      return;
    }

    router.push(to);
  };

  return (
    <Flex
      justify="space-between"
      align="center"
      className={`h-20 p-8 bg-blue200 bg-[${bgColor}] text-white`}
    >
      {isAlert && (
        <Alert
          className="absolute w-90vw top-6 right-[5%] z-20"
          type="error"
          message="인원 에러"
          description="한 명이상 선택하세요"
          closable
          onClose={() => {
            useIsAlert(false);
          }}
        />
      )}
      <Flex gap={8} align="center">
        <Link href={from}>
          <Image src={'/icons/Back.svg'} width={20} height={20} alt={'back'} />
        </Link>
        <h2 className="text-base font-semibold">{children}</h2>
      </Flex>
      <LinkButton onClick={handleClick}>확인</LinkButton>
    </Flex>
  );
}
