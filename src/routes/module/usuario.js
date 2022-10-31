import knex from '../../model'
import multer from 'multer'
import path from 'path'
import fs from 'fs'
import controller from '../../controller/usuario'
const { findUsuario,insertNewUsuario } = controller
import { authToken, generateAccessToken } from '../../configs'


export default (app) => {

    app.route("/auth/usuario")
    .get((req,res,next) => {

       console.log("autenticando usuario")

        next()
    }, findUsuario)
    .post((req,res,next) => {

      console.log(req.query)
      next()
    },insertNewUsuario)

    app.route("/auth/usuario/checkToken")
    .get(authToken,(req,res,next) => {

        // console.log("verificando a assinatura")
       // console.log(req)

        res.sendStatus(200)
    })

   



}