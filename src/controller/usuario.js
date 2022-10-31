import fs from 'fs'
import path from "path"
import knex from '../model'

export default  {


    findUsuario: async (req,res,next) => {
        try {
            
            
        console.log(req.query)

        const query = (await knex.raw(`SELECT * FROM usuario 
        WHERE nome = "${req.query.nome}" AND
        senha = "${req.query.senha}" LIMIT 1;`))
        

        res.json({ query , response:true , msg:"ok" })

        
        } catch (error) {

        res.json({ query , response:false, msg:error })
            
        }

    },

}