import { Button, Flex } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { MouseEventHandler, ReactNode } from 'react';

interface ConfirmNavProps {
  from?: string;
  to?: string;
  onClick: MouseEventHandler;
  bgColor?: string;
  children: ReactNode;
}

export default function ConfirmNav({ from = '#', to = '#', onClick, children }: ConfirmNavProps) {
  return (
    <Flex justify="space-between" align="center" className={`h-20 p-8 bg-blue300 text-white`}>
      <Flex gap={8} align="center" className="w-4">
        <Link href={from}>
          <Image src={'/icons/Back.svg'} width={20} height={20} alt={'back'} />
        </Link>
      </Flex>
      <h2>{children}</h2>
      <Button
        type="link"
        onClick={onClick}
        className="text-white hover:text-lg hover:text-white w-4"
      >
        Delete
      </Button>
    </Flex>
  );
}
