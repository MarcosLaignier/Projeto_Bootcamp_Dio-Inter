import {  Request, Response, NextFunction,Router, request, query } from "express";
import {StatusCodes} from 'http-status-codes'; 
import querys from "../sql/consultasDB";


const formroute = Router();

formroute.get('/card' , async (req:Request , res: Response , next:NextFunction) => {
    const card= await querys.consultaCard();
    res.status(StatusCodes.OK).send(card)
}
);


formroute.post('/card' , async (req:Request<{form:string}> , res: Response , next:NextFunction) => {
    /* const {username , mensagem} = req.body */
    /* const card = await querys.insereCard({username , mensagem}); */
    const newmensagem = req.body;
        const card = await querys.insereCard(newmensagem);
     res.status(StatusCodes.CREATED).send(card);
     
     


}

)

export default formroute;