import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionOrderByRelevanceFieldEnum } from './permission-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PermissionOrderByRelevanceInput {

    @Field(() => [PermissionOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof PermissionOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
