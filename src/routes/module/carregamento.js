import knex from '../../model'
import multer from 'multer'
import path from 'path'
const _path = path.join(process.env.INIT_CWD +'/carregado')
import fs from 'fs'
import { modificarArquivo,
    getUsusarioUploadByIdUsuario,
    finalResponse,
    registrandoCarregamento,
    deleteUsuarioUpload
 } from '../../controller/carregamento'
 import { authToken, generateAccessToken } from '../../configs'
export default (app) => {
    
    const dist = multer({ dest:_path })



    app.route("/carregamento")
    .post(authToken,async (req,res,next) => {

        // console.log(req.user.id_usuario)
        next()
    },dist.single('file'),
    modificarArquivo,
    registrandoCarregamento,
    finalResponse)
    .get(authToken, async (req,res,next) => {
        next()
    },getUsusarioUploadByIdUsuario)
    .delete((req,res,next)=>{
        
        // console.log(req.query)
        // res.json(req.query)
        next()
    },deleteUsuarioUpload)

    app.route("/carregamento/download")
    .get((req,res,next) => {
        try {
            const file = path.join(req.query.caminho)
            res.download(file)
            // console.log(file)
        // res.sendStatus(200)
        } catch (error) {
            console.log(error)
            res.sendStatus(404)

        }
    })


}