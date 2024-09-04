'use client';

import { Avatar, Badge, Flex, Typography } from 'antd';
import { UserOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { MouseEventHandler } from 'react';

export type AvatarSize = 'large' | 'small' | 'default';

export type AvatarProps = {
  size?: AvatarSize;
  name?: string;
  src?: string | null;
  alt?: string;
  remove?: boolean;
  vertical?: boolean;
  ellipsis?: boolean;
  onClick?: MouseEventHandler;
};

const sizes: Record<AvatarSize, number> = {
  small: 32,
  default: 36,
  large: 80,
};

export default function AvatarProfile({
  size = 'default',
  src,
  alt,
  name,
  ellipsis = true,
  vertical = true,
  remove = false,
  onClick,
}: AvatarProps) {
  const { Text } = Typography;

  return (
    <Flex
      vertical={vertical}
      justify="center"
      align="center"
      wrap
      className={`text-center gap-1 ${onClick && 'cursor-pointer'}`}
      onClick={onClick}
    >
      <Badge count={remove ? <CloseCircleOutlined /> : ''}>
        {src ? (
          <Avatar src={src} alt={alt} size={sizes[size]} />
        ) : (
          <Avatar size={sizes[size]} icon={<UserOutlined />} />
        )}
      </Badge>
      {name && (
        <Text
          ellipsis={ellipsis}
          style={{ width: `${ellipsis ? `${sizes[size] + 20}px}` : 'full'}` }}
          className={`${size === 'small' ? 'text-sm' : 'text-base'} font-bold font-pretendard`}
        >
          {name}
        </Text>
      )}
    </Flex>
  );
}
