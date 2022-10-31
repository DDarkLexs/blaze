import knex from '../../model'
import multer from 'multer'
import path from 'path'
const _path = './carregado'
import fs from 'fs'
import { modificarArquivo,
    getUsusarioUploadByIdUsuario,
    finalResponse,
    registrandoCarregamento,
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


}