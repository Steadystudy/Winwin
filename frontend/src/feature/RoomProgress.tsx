'use client';

import { Button, Flex } from 'antd';
import AvatarProfile from 'components/AvatarProfile';
import AvatarRow from 'components/AvatarRow';
import NavRoom from 'components/NavRoom';
import Image from 'next/image';

export default function RoomProgress() {
  return (
    <>
      <NavRoom>타이틀길고길다</NavRoom>
      <section className="flex flex-col h-80vh p-8">
        <Flex justify="space-between">
          <Flex vertical align="center">
            <span>Team</span>
            <span>김아무개</span>
          </Flex>
          <Image src={'/icons/Trophy.svg'} width={40} height={40} alt={'트로피'} />
          <Flex vertical align="center">
            <span>Team</span>
            <span className="text-end">이아무개</span>
          </Flex>
        </Flex>
        <Flex>
          <Flex vertical className="w-2/5">
            <Flex vertical className="max-h-40 overflow-y-auto">
              <AvatarRow size="small" name="하하" />
            </Flex>
          </Flex>
          <Flex vertical justify="center" gap={10} align="center" className="w-1/5">
            <span>vs</span>
          </Flex>
          <Flex vertical align="end" className="w-2/5">
            <Flex vertical gap={4} className="max-h-40 overflow-y-auto">
              <AvatarRow size="small" name="하하" />
              <AvatarRow size="small" name="하하" />
              <AvatarRow size="small" name="하하" />
              <AvatarRow size="small" name="하하" />
            </Flex>
          </Flex>
        </Flex>
        <Flex vertical gap={8}>
          <h2>상금</h2>
          <Flex align="center" justify="center">
            <h2>100,000원</h2>
          </Flex>
        </Flex>
        <Flex vertical gap={8}>
          <h2>심판</h2>
          <Flex align="center" gap={8} className="ml-8">
            <AvatarProfile />
            <span>심판이름</span>
          </Flex>
        </Flex>
        <Button className="absolute bottom-4 left-1/2 -translate-x-1/2 end font-bold text-2xl w-[75%] h-12 bg-blue300 text-white">
          내기중
        </Button>
      </section>
    </>
  );
}
