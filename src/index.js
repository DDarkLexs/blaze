import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes'
import cors from 'cors'
const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());
app.use(cors());
routes(app);
app.use(express.static("src/public"));

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
})

app.listen(5000,() => {
    console.clear()
     console.log(`servidor a ser executado na porta:${PORT}`);
})



export default app