import { Button, Flex } from 'antd';
import { PAGE_URL } from 'constants/url';
import Image from 'next/image';
import Link from 'next/link';
import { MouseEventHandler, ReactNode } from 'react';

interface NavJudgeProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLElement>;
}

export default function NavJudge({ children, onClick }: NavJudgeProps) {
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
      <Button
        type="link"
        onClick={onClick}
        className="w-[32px] font-semibold text-white hover:text-lg hover:text-white"
      >
        확인
      </Button>
    </Flex>
  );
}
