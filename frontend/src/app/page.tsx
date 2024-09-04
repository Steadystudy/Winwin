import { Avatar, Button, Flex } from 'antd';
import Account from 'components/Account';
import BetCard from 'components/BetCard';
import BottomBar from 'components/BottomBar';
import CardCarousel from 'components/CardCarousel';
import HomeHeader from 'feature/HomeHeader';
import Image from 'next/image';

export default function Homepage() {
  return (
    <div>
      <HomeHeader />
      <Flex justify="space-between" align="center" className="mt-20 px-4">
        <h2 className="text-2xl font-bold">진행중인 내기 (2)</h2>
        <span>더보기</span>
      </Flex>
      <CardCarousel />
      <BottomBar />
    </div>
  );
}
