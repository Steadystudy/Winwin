import { Avatar, Button, Flex } from 'antd';
import Account from 'components/Account';
import BetCard from 'components/BetCard';
import BottomBar from 'components/BottomBar';
import CardCarousel from 'components/CardCarousel';
import Image from 'next/image';

export default function Homepage() {
  return (
    <div>
      <div className="relative w-100vw h-25vh bg-blue200 -z-30 ">
        <Flex align="center" justify="space-between" className="p-4">
          <Flex align="center" gap={8}>
            <Avatar />
            <span>사용자 이름</span>
          </Flex>
          <button>
            <Image src={'/icons/NotificationOff.svg'} width={20} height={20} alt="notification" />
          </button>
        </Flex>
        <Flex className="absolute bottom-[-60px] left-1/2 -translate-x-1/2">
          <Account />
        </Flex>
      </div>
      <Flex justify="space-between" align="center" className="mt-20 px-4">
        <h2 className="text-2xl font-bold">진행중인 내기 (2)</h2>
        <span>더보기</span>
      </Flex>
      <CardCarousel />
      <BottomBar />
    </div>
  );
}
