import { Global, Module } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

export const PUB_SUB = 'PUB_SUB';

@Global()
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
