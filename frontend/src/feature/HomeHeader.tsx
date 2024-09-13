'use client';

import { Avatar, Button, Flex } from 'antd';
import Account from 'components/Account';
import AvatarProfile from 'components/AvatarProfile';
import { PAGE_URL } from 'constants/url';
import { useMe } from 'hooks/useMe';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
export default function HomeHeader() {
  const { me } = useMe();
  const router = useRouter();

  const handleLoginRedirect = () => {
    console.log('클릭');
    router.push(PAGE_URL.LOGIN);
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:4000/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: me?.id,
        }),
        credentials: 'include', // 쿠키를 요청에 포함
      });
      if (!response.ok) {
        throw new Error('로그아웃 실패');
      }

      const { ok, error } = await response.json();
      if (ok) {
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative w-full h-25vh bg-blue200 ">
      <Flex align="center" justify="space-between" className="p-4">
        <Flex align="center" gap={8}>
          {me ? (
            <AvatarProfile
              onClick={handleLogout}
              src={me?.profileImg}
              alt={me?.name + ' 프로필 사진'}
              vertical={false}
              name={me?.name}
            />
          ) : (
            <AvatarProfile
              onClick={handleLoginRedirect}
              vertical={false}
              ellipsis={false}
              name="로그인이 필요합니다"
            />
          )}
        </Flex>
        <button>
          <Image src={'/icons/NotificationOff.svg'} width={20} height={20} alt="notification" />
        </button>
      </Flex>
      <Flex className="absolute bottom-[-60px] left-1/2 -translate-x-1/2">
        <Account />
      </Flex>
    </div>
  );
}
