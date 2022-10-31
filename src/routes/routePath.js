import express from 'express'
const app = express()
import uploadAPI from './module/carregamento'
import usuarioAPI from './module/usuario'


uploadAPI(app)
usuarioAPI(app)

export default app