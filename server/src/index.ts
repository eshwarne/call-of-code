import {MikroORM} from "@mikro-orm/core"
import { CodeSnippets } from "./models/CodeSnippets"
import mikroORMConfig from "./mikro-orm.config"

console.log(process.env.POSTGRES_PASSWORD)

const startUp = async () =>{
     const orm = await MikroORM.init(mikroORMConfig)
    const codeSnippet = orm.em.create(CodeSnippets,{code:"",title:"Samplecode",description:"this is a sample code"})
    await orm.em.persistAndFlush(codeSnippet)
}

startUp().catch(err => console.log(err))
