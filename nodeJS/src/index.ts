import express, {Request, Response , NextFunction} from 'express';

import formroute from './routes/form.route';


const app = express();
const cors = require('cors')

app.use(cors());
//Configuracao da aplicacao
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Configuracao das rotas
app.use(formroute)

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'Ta funcionando!!!' });
});

//Inicializacao do servidor
app.listen(5000, () => {
    console.log('Aplicação escutando a porta 5000!!! \n http://localhost:5000/status');
})


