'use client';

import { Flex, Popover } from 'antd';
import Image from 'next/image';
import TicketBox from './TicketBox';
import { useRouter } from 'next/navigation';
import { PAGE_URL } from 'constants/url';

export default function BottomBar() {
  const router = useRouter();

  const content = (
    <Flex gap={16}>
      <TicketBox
        onClick={() => {
          router.push(PAGE_URL.INVITE_OPPONENT);
        }}
        game="solo"
      >
        개인전
      </TicketBox>
      <TicketBox
        onClick={() => {
          router.push(PAGE_URL.INVITE_MYTEAM);
        }}
        game="team"
      >
        팀전
      </TicketBox>
    </Flex>
  );

  return (
    <Flex className=" fixed left-1/2 -translate-x-1/2 bottom-4 w-[90%] h-20 justify-between flex-shrink-0 rounded-3xl bg-blue100">
      <Flex justify="center" align="center" className="pl-12">
        <Image src={`/icons/store.svg`} width={40} height={40} alt="store" />
      </Flex>
      <Flex justify="center" align="center" className="relative h-20">
        <Flex
          justify="center"
          align="center"
          className="absolute top-[-20px] w-20 h-20 rounded-full bg-green-500 hover:cursor-pointer"
        >
          <Flex
            justify="center"
            align="center"
            className="w-16 h-16 rounded-full bg-background drop-shadow-md"
          >
            <Popover className="bg-background" content={content} trigger={'click'}>
              <Image src={'/icons/Money.svg'} width={40} height={40} alt={'bet'} />
            </Popover>
          </Flex>
        </Flex>
      </Flex>
      <Flex justify="center" align="center" className="pr-12">
        <Image src={`/icons/Gamepad.svg`} width={40} height={40} alt="gameEvent" />
      </Flex>
    </Flex>
  );
}
