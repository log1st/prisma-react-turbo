import { Field, ObjectType } from '@nestjs/graphql';
import { Type } from '@nestjs/common';

export const findManyResponseType = <T>(type: Type<T>) => {
  @ObjectType(`${type.name}Pagination`, {
    isAbstract: true,
  })
  class Relay {
    @Field(() => [type])
      records: Array<T>;

    @Field()
      skip: number;

    @Field()
      take: number;

    @Field()
      total: number;
  }

  return Relay;
};
