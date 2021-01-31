// import {MikroORM} from "@mikro-orm/core"
import dotenv from "dotenv"
dotenv.config()
console.log(process.env.POSTGRES_PASSWORD)

// const startUp = async () =>{
//      const orm = MikroORM.init({
//         dbName:"callofcode",
//         user:process.env.POSTGRES_USER,
//         password:process.env.POSTGRES_PASSWORD,
//         debug:true
//     })
//     orm
// }

// startUp()
