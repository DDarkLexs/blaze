import { knex } from 'knex'
import { mysql } from '../configs'

export default knex(mysql)