'use client';

import Image from 'next/image';
import { Flex } from 'antd';
import { Account as AccountType } from '__generated__/graphql';
import { priceToString } from 'hooks/priceFormat';

interface AccountProps {
  info: Partial<AccountType>;
}

export default function Account({ info }: AccountProps) {
  const { id, accountNo, accountBalance, owner } = info;

  return (
    <Flex className="flex-col w-80 h-44 shadow-md rounded-md bg-white ">
      <Flex className="items-center gap-2 p-2">
        <Image src={'/icons/신한.svg'} width={16} height={16} alt="신한로고" />
        <span>100-110-140001</span>
      </Flex>
      <Flex className="flex-col justify-center items-center my-2">
        <span>{owner?.name}님의 계좌</span>
        <div>
          <span className="text-3xl font-bold">
            {accountBalance && priceToString(accountBalance)}
          </span>
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
