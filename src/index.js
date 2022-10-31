import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes'
import cors from 'cors'
import dotenv from 'dotenv'
import { authToken, generateAccessToken } from './configs'

dotenv.config()

console.log(process.env.PORT)

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(cors());
routes(app);
app.use(express.static("src/public"));




app.get('/', (req, res) => {

  res.sendFile('index.html', {root: path.join(__dirname, 'public')});

})

app.listen(PORT,() => {
  console.clear()
    // console.log(process.env.TOKEN_SECRET)
    console.log(`servidor a ser executado na porta:${PORT}`);
})

