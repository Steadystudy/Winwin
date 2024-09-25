'use client';

import { gql, useMutation, useSubscription } from '@apollo/client';
import { LogoutMutation, User } from '__generated__/graphql';
import { Avatar, Button, Flex } from 'antd';
import Account from 'components/Account';
import AvatarProfile from 'components/AvatarProfile';
import { PAGE_URL } from 'constants/url';
import { useMe } from 'hooks/useMe';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { isLoggedInVar } from 'provider/ApolloProvider';
import { useState } from 'react';

const LOGOUT_MUTATION = gql`
  mutation logout($loginInput: LogoutInput!) {
    logout(input: $loginInput) {
      ok
      error
    }
  }
`;

const PENDING_BET_SUBSCRIPTION = gql`
  subscription OnPendingBet {
    pendingBet {
      bet {
        id
      }
    }
  }
`;

interface HomeHeaderProps {
  me: User | undefined;
}

export default function HomeHeader({ me }: HomeHeaderProps) {
  const router = useRouter();
  const [subData, setSubData] = useState();

  useSubscription(PENDING_BET_SUBSCRIPTION, {
    skip: !me,
    onData: ({ data: { data } }) => {
      if (data) {
        setSubData(data);
      }
    },
  });

  const handleLoginRedirect = () => {
    router.push(PAGE_URL.LOGIN);
  };

  const onCompleted = (data: LogoutMutation) => {
    const {
      logout: { ok, error },
    } = data;

    if (ok) {
      isLoggedInVar(false);
      //일단 페이지 전체 새로고침
      window.location.reload();
    }
  };
  const [loginMuation, { loading, data: loginResult }] = useMutation<LogoutMutation>(
    LOGOUT_MUTATION,
    {
      onCompleted,
    },
  );

  const handleLogout = async (e: any) => {
    e.preventDefault();

    if (!loading) {
      loginMuation({
        variables: {
          loginInput: {
            id: me?.id,
          },
        },
      });
    }
  };

  return (
    <div className="relative w-full h-25vh bg-blue200 mb-20">
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
