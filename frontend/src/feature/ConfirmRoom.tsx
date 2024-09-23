'use client';

import { Button, Flex } from 'antd';
import AvatarProfile from 'components/AvatarProfile';
import NavConfirm from 'components/NavConfirm';
import { PAGE_URL } from 'constants/url';
import { useRoomStore } from 'store/useRoomStore';

export default function ConfirmRoom() {
  const { judge, myTeam, opponent } = useRoomStore();

  const cancelRoom = () => {};
  const transfer = () => {};
  return (
    <>
      <NavConfirm
        from={PAGE_URL.HOME}
        onClick={() => {
          cancelRoom();
        }}
      >
        타이틀이름오가지
      </NavConfirm>
      <Flex vertical gap={32} className="p-8 h-full">
        <Flex vertical gap={4}>
          <h2>우리팀</h2>
          <Flex>
            {myTeam.map(({ id, name }) => (
              <AvatarProfile key={id} name={name} />
            ))}
          </Flex>
        </Flex>
        <Flex vertical gap={4}>
          <h2>상대팀</h2>
          <Flex>
            {opponent.map(({ id, name }) => (
              <AvatarProfile key={id} name={name} />
            ))}
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
            {judge.map(({ id, name }) => (
              <AvatarProfile key={id} name={name} />
            ))}
          </Flex>
        </Flex>
        <Button
          className="absolute bottom-4 left-1/2 -translate-x-1/2  font-bold text-2xl w-[75%] h-12 bg-green-500 text-white"
          onClick={transfer}
        >
          이체하기
        </Button>
      </Flex>
    </>
  );
}
