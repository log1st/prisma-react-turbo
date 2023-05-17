import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PermissionNamespaceSlugCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    namespace!: string;

    @Field(() => String, {nullable:false})
    slug!: string;
}
