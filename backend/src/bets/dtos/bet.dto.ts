import { Field, InputType, ObjectType, OmitType, PickType } from '@nestjs/graphql';
import { Bet } from '../entities/bet.entity';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { Column } from 'typeorm';

@InputType()
export class CreateBetInput extends OmitType(Bet, ['id', 'createdAt', 'updatedAt']) {}

@ObjectType()
export class CreateBetOutput extends CoreOutput {
  @Field()
  @Column({ nullable: true })
  bet?: Bet;
}
