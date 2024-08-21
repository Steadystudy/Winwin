import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entity/core.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'rooms',
})
@ObjectType()
@InputType('RoomInputType', { isAbstract: true })
export class Room extends CoreEntity {
  @Column()
  @Field((type) => Int)
  betId: number;

  @Column()
  @Field((type) => Int)
  judgeId: number;

  @Column()
  @Field((type) => String)
  betContent: string;

  @Column()
  @Field((type) => Int)
  totalAmount: number;
}
