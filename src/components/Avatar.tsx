import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

type Size = 'large' | 'small' | 'default';

type AvatarProps = {
  size?: Size;
  src?: string;
  alt?: string;
};

const sizes: Record<Size, number> = {
  small: 32,
  default: 36,
  large: 80,
};

export default function Avatars({ size = 'default', src, alt }: AvatarProps) {
  return (
    <Avatar
      src={src}
      alt={alt}
      size={sizes[size]}
      className="bg-slate-500"
      icon={<UserOutlined />}
    />
  );
}
