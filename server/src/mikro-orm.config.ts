import { MikroORM } from "@mikro-orm/core";
import { CodeSnippets } from "./models/CodeSnippets";
import dotenv from "dotenv"
import path from "path"
dotenv.config()

export default {
    migrations:{
        path: path.join(__dirname,'./migrations'), // path to the folder with migrations
        pattern: /^[\w-]+\d+\.[tj]s$/
    }, 
    entities:[CodeSnippets],
    dbName:"callofcode",
    type:"postgresql",
    user:process.env.POSTGRES_USER,
    password:process.env.POSTGRES_PASSWORD,
    debug:true
} as Parameters<typeof MikroORM.init>[0]