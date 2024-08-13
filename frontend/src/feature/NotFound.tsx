'use client';

import { Button, Flex } from 'antd';
import { PAGE_URL } from 'constants/url';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <section>
      <Flex vertical>
        <h2>페이지를 찾을 수 없어요😥</h2>
        <Flex>
          <Button onClick={() => router.back()}>뒤로 가기</Button>
          <Button>
            <Link href={PAGE_URL.HOME}>홈으로 가기</Link>
          </Button>
        </Flex>
      </Flex>
    </section>
  );
}
