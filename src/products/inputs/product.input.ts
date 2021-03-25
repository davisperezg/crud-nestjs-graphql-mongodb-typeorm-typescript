import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class InputProduct {
  @Field()
  readonly name: string;

  @Field(() => Int)
  readonly amount: number;

  @Field(() => Boolean, { nullable: true })
  readonly state?: boolean;
}
