import { Flex } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface InviteNavProps {
  from?: string;
  to?: string;
  children: ReactNode;
}

export default function InviteNav({ from = '#', to = '#', children }: InviteNavProps) {
  return (
    <Flex justify="space-between" align="center" className="h-20 p-8 bg-blue200 text-white">
      <Flex gap={8} align="center">
        <Link href={from}>
          <Image src={'/icons/Back.svg'} width={20} height={20} alt={'back'} />
        </Link>
        <h2 className="text-base font-semibold">{children}</h2>
      </Flex>
      <Link href={to} className="text-white hover:text-lg hover:text-white">
        확인
      </Link>
    </Flex>
  );
}
