'use client';

import { Flex, Typography } from 'antd';
import AvatarProfile, { AvatarProps, AvatarSize } from './AvatarProfile';

const fontSizes: Record<AvatarSize, string> = {
  small: 'text-sm',
  default: 'text-base',
  large: 'text-lg font-semibold',
};

type AvatarRowProps = {
  gap?: number;
};

export default function AvatarRow({
  size = 'default',
  src,
  alt,
  name,
  onClick,
  gap = 4,
}: AvatarProps & AvatarRowProps) {
  const { Text } = Typography;

  return (
    <Flex align="center" gap={gap} onClick={onClick}>
      <AvatarProfile size={size} src={src} alt={alt} />
      <Text ellipsis className={`${fontSizes[size]}`}>
        {name}
      </Text>
    </Flex>
  );
}
