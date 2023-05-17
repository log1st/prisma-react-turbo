import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsOnRolesOrderByRelevanceFieldEnum } from './permissions-on-roles-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PermissionsOnRolesOrderByRelevanceInput {

    @Field(() => [PermissionsOnRolesOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof PermissionsOnRolesOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
