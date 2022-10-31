import knex from '../../model'
import multer from 'multer'
import path from 'path'
import fs from 'fs'
import controller from '../../controller/usuario'
const { findUsuario } = controller

export default (app) => {

    app.route("/auth/usuario")
    .get((req,res,next) => {

        console.log("autenticando usuario")


        next()
    }, findUsuario)



}