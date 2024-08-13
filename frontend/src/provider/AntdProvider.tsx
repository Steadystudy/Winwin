'use client';

import React from 'react';
import { StyleProvider } from '@ant-design/cssinjs';
import { AntdRegistry } from '@ant-design/nextjs-registry';

export default function AntdProvider({ children }: { children: React.ReactNode }) {
  return (
    <StyleProvider layer>
      <AntdRegistry>{children}</AntdRegistry>
    </StyleProvider>
  );
}
