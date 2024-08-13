import { Button, Flex } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { MouseEventHandler, ReactNode } from 'react';

interface NavCreateProps {
  from?: string;
  to?: string;
  onClick: MouseEventHandler;
  bgColor?: string;
  children: ReactNode;
}

export default function NavCreate({ from = '#', to = '#', onClick, children }: NavCreateProps) {
  return (
    <Flex justify="space-between" align="center" className={`h-20 p-8 bg-green-500 text-white`}>
      <Flex gap={8} align="center">
        <Link href={from}>
          <Image src={'/icons/Back.svg'} width={20} height={20} alt={'back'} />
        </Link>
        <h2 className="text-base font-semibold">{children}</h2>
      </Flex>
      <Button type="link" onClick={onClick} className="text-white hover:text-lg hover:text-white">
        <Link href={to}>확인</Link>
      </Button>
    </Flex>
  );
}
