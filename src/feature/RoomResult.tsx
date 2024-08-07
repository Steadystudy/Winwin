import { Badge, Flex, Image } from 'antd';
import AvatarRow from 'components/AvatarRow';
import NavRoom from 'components/NavRoom';

export default function RoomResult() {
  return (
    <>
      <NavRoom>타이틀</NavRoom>
      <section className="flex flex-col h-80vh p-8">
        <Flex justify="space-between">
          <Badge count={'win'} color="#1890FF">
            <Flex vertical align="center">
              <span>Team</span>
              <span>김아무개</span>
            </Flex>
          </Badge>
          <Image
            src={'/icons/Trophy.svg'}
            className="-translate-x-8"
            width={40}
            height={40}
            alt={'트로피'}
          />
          <Badge count={'lose'}>
            <Flex vertical align="center">
              <span>Team</span>
              <span className="text-end">이아무개</span>
            </Flex>
          </Badge>
        </Flex>
        <Flex>
          <Flex vertical className="w-2/5">
            <Flex vertical className="max-h-40 overflow-y-auto">
              <AvatarRow size="small" name="하하" />
            </Flex>
          </Flex>
          <Flex vertical justify="center" gap={10} align="center" className="w-1/5">
            <span>vs</span>
          </Flex>
          <Flex vertical align="end" className="w-2/5">
            <Flex vertical gap={4} className="max-h-40 overflow-y-auto">
              <AvatarRow size="small" name="하하" />
              <AvatarRow size="small" name="하하" />
              <AvatarRow size="small" name="하하" />
              <AvatarRow size="small" name="하하" />
            </Flex>
          </Flex>
        </Flex>
        <Flex vertical gap={8}>
          <h2>상금</h2>
          <Flex align="center" justify="center">
            <span>김아무개팀 인당</span>
            <h2>100,000원</h2>
          </Flex>
        </Flex>
        <Flex vertical gap={8}>
          <h2>심판</h2>
          <AvatarRow gap={16} name="심판이름" />
        </Flex>
      </section>
    </>
  );
}
