import fs from 'fs'
import path from "path"



export default  {


    finalResponse: (req,res,next) => {
    console.log(`todos trabalho de carregamento feito`)

    res.json({msg: "ok", response: true})
    },

    registrandoCarregamento: (req,res,next) => {
    console.log(`Vai inserindo para o banco de dados`)

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