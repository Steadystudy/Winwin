import { Flex } from 'antd';
import { ShopOutlined } from '@ant-design/icons';
import Image from 'next/image';

export default function BottomBar() {
  return (
    <Flex className=" fixed left-1/2 -translate-x-1/2 bottom-4 w-[90%] h-24 justify-between flex-shrink-0 rounded-3xl bg-blue100">
      <Flex justify="center" align="center" className="pl-12">
        <Image src={`/icons/store.svg`} width={40} height={40} alt="store" />
      </Flex>
      <Flex justify="center" align="center" className="relative h-20">
        <Flex
          justify="center"
          align="center"
          className="absolute top-[-20px] w-24 h-24 rounded-full bg-green-500"
        >
          <Flex
            justify="center"
            align="center"
            className="w-20 h-20 rounded-full bg-background drop-shadow-md"
          >
            icon
          </Flex>
        </Flex>
      </Flex>
      <Flex justify="center" align="center" className="pr-12">
        <Image src={`/icons/Gamepad.svg`} width={40} height={40} alt="gameEvent" />
      </Flex>
    </Flex>
  );
}
