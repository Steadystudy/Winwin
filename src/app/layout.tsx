import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WinWin',
  description: '친구들과 내기 한판',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + `relative bg-background max-w-screen-sm mx-auto border`}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
