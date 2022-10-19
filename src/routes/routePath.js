import express from 'express'
const app = express()
import uploadAPI from './module/carregamento'


uploadAPI(app)


export default app