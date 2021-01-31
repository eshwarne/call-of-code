import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class CodeSnippets{
    @PrimaryKey()
    id!:number

    @Property({type:"text"})
    title!:string

    @Property({type:"text"})
    description!:string

    @Property({type:"text"})
    code!:string

    @Property({type:"date"})
    createdAt:Date=new Date()
}