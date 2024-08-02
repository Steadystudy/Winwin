import { Avatar, Flex, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';

type Size = 'large' | 'small' | 'default';

type AvatarProps = {
  size?: Size;
  name?: string;
  src?: string;
  alt?: string;
};

const sizes: Record<Size, number> = {
  small: 32,
  default: 36,
  large: 80,
};

export default function AvatarProfile({ size = 'default', src, alt, name }: AvatarProps) {
  const { Text } = Typography;

  return (
    <Flex vertical wrap className={`items-center justify-center text-center gap-1`}>
      <Avatar src={src} alt={alt} size={sizes[size]} icon={<UserOutlined />} />
      {name && (
        <Text ellipsis style={{ width: `${sizes[size]}px` }} className={`text-xs hover:text-clip`}>
          {name}
        </Text>
      )}
    </Flex>
  );
}
