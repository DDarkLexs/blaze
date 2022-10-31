import path from 'path'
import dotenv from 'dotenv'
import  jwt from "jsonwebtoken"
import md5 from "md5"
dotenv.config()

export const sqliteConnection = {
  client: 'sqlite3', // or 'better-sqlite3'
  connection: {
    filename: path.join(process.env.INIT_CWD + '/src/database/index.db')
  },
  useNullAsDefault:true
}




export function generateAccessToken(user) {
  // console.log(user)
  return jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: '1800s' })}


export function authToken(req,res,next) {
  const authHeader = req.headers['authorization']

  const token = authHeader// && authHeader.split(' ')[1]
  // console.log(authHeader)
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
   
    if (err){
      
      return res.sendStatus(403)
    
    }

    req.user = user
    
    next()
  })


}


// console.log(path.join(process.env.INIT_CWD+'/src/database/index.db'))