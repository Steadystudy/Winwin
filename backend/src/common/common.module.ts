import { Module } from '@nestjs/common';
import { RedisPubSub } from 'graphql-redis-subscriptions';

const pubSub = new RedisPubSub();

export const PUB_SUB = 'PUB_SUB';

@Module({
  providers: [
    {
      provide: PUB_SUB,
      useValue: pubSub,
    },
  ],
  exports: [PUB_SUB],
})
export class CommonModule {}
