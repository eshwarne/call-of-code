import { MikroORM } from "@mikro-orm/core";
import { CodeSnippets } from "./models/CodeSnippets";
import dotenv from "dotenv"
dotenv.config()

export default {
    entities:[CodeSnippets],
    dbName:"callofcode",
    type:"postgresql",
    user:process.env.POSTGRES_USER,
    password:process.env.POSTGRES_PASSWORD,
    debug:true
} as Parameters<typeof MikroORM.init>[0]