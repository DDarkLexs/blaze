// import { knex } from 'knex'
import { sqliteConnection } from '../configs'


const knex  = require('knex')(sqliteConnection)

knex.raw("PRAGMA foreign_keys = ON;")
.then((a)=>{
  //  console.log("verificacao de chave estrangeira ativo")
})

export default knex


