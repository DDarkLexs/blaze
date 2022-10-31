import path from 'path'

export const sqliteConnection = {
  client: 'sqlite3', // or 'better-sqlite3'
  connection: {
    filename: path.join(process.env.INIT_CWD+'/src/database/index.db')
  },
  useNullAsDefault:true
}


// console.log(path.join(process.env.INIT_CWD+'/src/database/index.db'))