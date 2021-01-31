import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class CodeSnippets{
    @PrimaryKey()
    id!:number

    @Property()
    title!:string

    @Property()
    description!:string

    @Property()
    code!:string

    @Property()
    createdAt:Date=new Date()
}