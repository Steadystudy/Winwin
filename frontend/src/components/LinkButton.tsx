import { Button } from 'antd';
import React, { MouseEventHandler, ReactNode } from 'react';

interface LinkButtonProps {
  onClick: MouseEventHandler<HTMLElement>;
  children: ReactNode;
}

export default function LinkButton({ onClick, children }: LinkButtonProps) {
  return (
    <Button
      type="link"
      onClick={onClick}
      className="text-white text-base font-semibold font-pretendard"
    >
      {children}
    </Button>
  );
}
