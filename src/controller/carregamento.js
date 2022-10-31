import fs from 'fs'
import path from "path"
import knex from '../model'

module.exports = {

    getUsusarioUploadByIdUsuario: async (req,res,next)=>{
        try {

            const query = (await knex.raw(`
            SELECT 
            id_carregamento,
            c.nome as nome,
            caminho,
            c.datacad as datacad,
            tamanho,
            tipo
             FROM carregamento c
            INNER JOIN usuario u ON u.id_usuario = c.id_usuario
            WHERE u.id_usuario = ${req.user.id_usuario}
            `))

            res.json({query, msg: 'ok', response: true})   

        } catch (error) {
            res.json({msg: error, response: false})   
            
        }
    },
    finalResponse: (req,res,next) => {
    console.log(`todos trabalho de carregamento feito`)

    res.json({msg: "ok", response: true})
    },

    registrandoCarregamento: async (req,res,next) => {
    // console.log(req.query.id_usuario)
     await knex("carregamento").insert({ 
        nome:req.file.originalname,	
        caminho:(`${req.file.destination}/${req.file.originalname}`),
        tipo:req.file.mimetype,
        destino:req.file.destination,
        tamanho:req.file.size,
        datacad:new Date(),
        id_usuario:req.user.id_usuario
     })

        next()
    },

    modificarArquivo: (req,res,next) => {
        try {
            
   /*  console.log(req.file)
    console.log(req.user) */
    fs.renameSync(req.file.path, 
    path.join(`${req.file.destination}/${req.file.originalname}`))
    console.log("Carregado terminado")

        next()

        } catch (error) {

            console.log(error)
            res.json({msg: error, response: false})   
        }
}
    
}