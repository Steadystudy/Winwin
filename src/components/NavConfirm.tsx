import { Button, Flex } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { MouseEventHandler, ReactNode } from 'react';

interface NavConfirmProps {
  from?: string;
  to?: string;
  onClick: MouseEventHandler;
  bgColor?: string;
  children: ReactNode;
}

export default function NavConfirm({ from = '#', to = '#', onClick, children }: NavConfirmProps) {
  return (
    <Flex justify="space-between" align="center" className={`h-20 p-8 bg-orange-300 text-white`}>
      <Flex gap={8} align="center" className="w-4">
        <Link href={from}>
          <Image src={'/icons/Back.svg'} width={20} height={20} alt={'back'} />
        </Link>
      </Flex>
      <h2>{children}</h2>
      <Button type="link" onClick={onClick} shape="circle" className="text-white">
        <Image src={'/icons/Cancel.svg'} width={28} height={28} alt={'cancel'} />
      </Button>
    </Flex>
  );
}
