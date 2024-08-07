import { Flex } from 'antd';
import { PAGE_URL } from 'constants/url';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface NavRoomProps {
  children: ReactNode;
}

export default function NavRoom({ children }: NavRoomProps) {
  return (
    <Flex
      align="center"
      justify="space-between"
      className={`h-20 p-8 bg-blue300 text-white text-center`}
    >
      <Link href={PAGE_URL.HOME}>
        <Image src={'/icons/Exit.svg'} width={32} height={32} alt={'ExitRoom'} />
      </Link>
      <h2>{children}</h2>
      <div className="w-[32px]"></div>
    </Flex>
  );
}
