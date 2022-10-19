import knex from '../../model'
import multer from 'multer'
import path from 'path'
const _path = './carregado'
import fs from 'fs'
import controller from '../../controller/carregamento'
const { modificarArquivo,
    finalResponse,
    registrandoCarregamento
 } = controller

export default (app) => {
    
    const dist = multer({ dest:_path })

    app.route("/carregamento")
    .get(dist.single('file'),
    async (req,res,next) => {

    
        res.send("ok")
    })


    app.route("/carregamento")
    .post(async (req,res,next) => {

        console.log("Fazendo carregamento")
        next()
    },dist.single('file'),
    modificarArquivo,
    registrandoCarregamento,
    finalResponse)


}