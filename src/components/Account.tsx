import Image from 'next/image';
import logo from '../../public/icons/Logo.jpg';
import { Flex } from 'antd';

export default function Account() {
  return (
    <Flex className="flex-col w-80 h-44 shadow-md rounded-md bg-white ">
      <Flex className="items-center gap-2 p-2">
        <div className="w-4 h-4">
          <Image src={logo} alt="신한로고" />
        </div>
        <span>000-000000-000000</span>
      </Flex>
      <Flex className="flex-col justify-center items-center my-2">
        <span>사용자의 계좌</span>
        <div>
          <span className="text-3xl font-bold">500,000</span>
          <span>원</span>
        </div>
      </Flex>
      <hr className="mt-2 bg-gray-200" />
      <Flex className="w-full h-full justify-evenly items-center">
        <div className="w-1/2 text-center font-semibold">조회</div>
        <hr className="w-[1px] h-6 bg-gray-200" />
        <div className="w-1/2 text-center font-semibold">출금</div>
      </Flex>
    </Flex>
  );
}
