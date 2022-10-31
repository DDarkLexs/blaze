import fs from 'fs'
import path from "path"
import knex from '../model'
import { authToken, generateAccessToken } from '../configs'
import md5 from 'md5'

export default  {
 


    insertNewUsuario: async (req,res,next) => {
        try {
            
            
            const {  } = req.query
        
            req.query.datacad = new Date()
            delete req.query.concorda
            req.query.senha = md5(req.query.senha)

        
        const id_usuario = (await knex('usuario').insert(req.query))[0]

        res.json({ id_usuario })

        
        } catch (error) {
           console.log(error)

        res.sendStatus(401)
            
        }

    },
    findUsuario: async (req,res,next) => {
        try {
            
            
        const query = (await knex.raw(`
        SELECT * FROM usuario 
        WHERE nome = "${req.query.nome}" 
        AND
        senha = "${md5(req.query.senha)}" LIMIT 1;`))

        
        
        if(query.length === 0) throw "O nome do usuário ou a palavra-passe está errado";
      
        const data = query[0];
        delete data.senha //!important;
        
        
        await knex('acesso').insert({  
            data:new Date(),
            datacad:new Date(),
            id_usuario:data.id_usuario,
        })

        const token = generateAccessToken(data)

      //  console.log(token)
        const $query = {token, query:data , response:true , msg:"ok" }

        // console.log($query)

        res.json($query)

        
        } catch (error) {
           console.log(error)

        res.sendStatus(401)
            
        }

    },

}