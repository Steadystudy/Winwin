import type { Metadata } from 'next';
import './globals.css';
import AntdProvider from 'provider/AntdProvider';
import localFont from 'next/font/local';

const pretendard = localFont({
  src: '../static/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

console.log(pretendard.className);

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
    <html lang="kr" className={`${pretendard.variable}`}>
      <body
        className={`${pretendard.className} relative bg-background max-w-screen-sm mx-auto border`}
      >
        <AntdProvider>{children}</AntdProvider>
      </body>
    </html>
  );
}
