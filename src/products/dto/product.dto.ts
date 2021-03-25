import { ObjectType, InputType, Field, Int, ID } from '@nestjs/graphql';

import { ObjectID } from 'typeorm';

@ObjectType()
export class CreateProductDTO {
  @Field(() => ID)
  readonly id: ObjectID;

  @Field()
  readonly name: string;

  @Field(() => Int)
  readonly amount: number;

  @Field(() => Boolean)
  readonly state: boolean;

  @Field(() => Date)
  readonly createdAt: Date;

  @Field(() => Date)
  readonly updatedAt: Date;
}
