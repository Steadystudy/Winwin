import type { Metadata } from 'next';
import './globals.css';
import AntdProvider from 'provider/AntdProvider';
import { pretendard } from 'fonts';
import ApolloClientProvier from 'provider/ApolloProvider';

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
        <ApolloClientProvier>
          <AntdProvider>{children}</AntdProvider>
        </ApolloClientProvier>
      </body>
    </html>
  );
}
