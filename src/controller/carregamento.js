import fs from 'fs'
import path from "path"
import knex from '../model'

module.exports = {
    deleteUsuarioUpload: async (req,res,next) => {
        try {
            const response = (await knex('carregamento')
        .delete("*")
        .where("id_carregamento",'=',req.query.id_carregamento));
        
        // console.log(response)
        fs.rm(req.query.caminho, (err)=>{
            // console.log(err)
        })


        res.sendStatus(200)


        } catch (error) {

            res.sendStatus(404)        
            console.log(error)
        }
    },

    getUsusarioUploadByIdUsuario: async (req,res,next)=>{
        try {

            const query = (await knex.raw(`
            SELECT 
            id_carregamento,
            u.id_usuario as id_usuario,
            c.nome as nome,
            caminho,
            c.datacad as datacad,
            tamanho,
            tipo
             FROM carregamento c
            INNER JOIN usuario u ON u.id_usuario = c.id_usuario
            WHERE u.id_usuario = ${req.user.id_usuario}
            ORDER BY c.id_carregamento DESC`))

            res.json({query, msg: 'ok', response: true})   

        } catch (error) {
            res.json({msg: error, response: false})   
            
        }
    },
    finalResponse: (req,res,next) => {
    // console.log(`todos trabalho de carregamento feito`)

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
    // console.log(req.user) */
    fs.renameSync(req.file.path, 
    path.join(`${req.file.destination}/${req.file.originalname}`))
    // console.log("Carregado terminado")

        next()

        } catch (error) {

            // console.log(error)
            res.sendStatus(401)   
        }
}
    
}