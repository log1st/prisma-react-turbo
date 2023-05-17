import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionNamespaceSlugCompoundUniqueInput } from './permission-namespace-slug-compound-unique.input';

@InputType()
export class PermissionWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => PermissionNamespaceSlugCompoundUniqueInput, {nullable:true})
    namespace_slug?: PermissionNamespaceSlugCompoundUniqueInput;
}
