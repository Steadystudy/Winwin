'use client';

import { Button, Flex } from 'antd';
import AvatarProfile from 'components/AvatarProfile';
import ConfirmNav from 'components/ConfirmNav';

export default function ConfirmRoom() {
  const cancelRoom = () => {};
  const transfer = () => {};
  return (
    <>
      <ConfirmNav
        onClick={() => {
          cancelRoom();
        }}
      >
        타이틀이름오가지
      </ConfirmNav>
      <Flex vertical gap={32} className="p-8">
        <Flex vertical gap={4}>
          <h2>우리팀</h2>
          <Flex>
            <AvatarProfile name="아무" />
          </Flex>
        </Flex>
        <Flex vertical gap={4}>
          <h2>상대팀</h2>
          <Flex>
            <AvatarProfile name="노래" />
          </Flex>
        </Flex>
        <Flex vertical gap={12}>
          <Flex align="end">
            <h2>배팅금액</h2>
            <span>(인당)</span>
          </Flex>
          <Flex justify="end" align="center">
            <h1 className="font-bold text-3xl">10,000원</h1>
          </Flex>
        </Flex>
        <Flex vertical gap={4}>
          <h2>심판</h2>
          <Flex align="center" justify="center" gap={16}>
            <AvatarProfile />
            <span>심판 이름</span>
          </Flex>
        </Flex>
        <Button
          className="mx-auto font-bold text-2xl"
          style={{
            width: '80%',
            height: '3rem',
          }}
          onClick={transfer}
        >
          이체하기
        </Button>
      </Flex>
    </>
  );
}
