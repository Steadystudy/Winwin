'use client';

import { Avatar, Badge, Flex, Typography } from 'antd';
import { UserOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { MouseEventHandler } from 'react';

export type AvatarSize = 'large' | 'small' | 'default';

export type AvatarProps = {
  size?: AvatarSize;
  name?: string;
  src?: string;
  alt?: string;
  remove?: boolean;
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
  remove = false,
  onClick,
}: AvatarProps) {
  const { Text } = Typography;

  return (
    <Flex vertical wrap className={`text-center gap-1`} onClick={onClick}>
      <Badge count={remove ? <CloseCircleOutlined /> : ''}>
        <Avatar src={src} alt={alt} size={sizes[size]} icon={<UserOutlined />} />
      </Badge>
      {name && (
        <Text ellipsis style={{ width: `${sizes[size]}px` }} className={`text-xs hover:text-clip`}>
          {name}
        </Text>
      )}
    </Flex>
  );
}
