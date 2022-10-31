import fs from 'fs'
import path from "path"
import knex from '../model'

export default  {


    finalResponse: (req,res,next) => {
    console.log(`todos trabalho de carregamento feito`)

    res.json({msg: "ok", response: true})
    },

    registrandoCarregamento: async (req,res,next) => {
    console.log(`Vai inserindo para o banco de dados`)
     await knex("carregamento").insert({ 
        nome:req.file.originalname,	
        caminho:(`${req.file.destination}/${req.file.originalname}`),
        tipo:req.file.mimetype,
        destino:req.file.destination,
        tamanho:req.file.size,
        datacad:new Date().toLocaleString(),
     })

        next()
    },

    modificarArquivo: (req,res,next) => {
        try {
            
    console.log(req.file)
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