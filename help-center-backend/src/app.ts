import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorhandler from './app/middleWares/globalErrorhandler';
import { notFountRoute } from './app/middleWares/notFountRoute';

const app:Application=express();

// parser
app.use(express.json())
app.use(cors());

app.use('/',router);


app.get('/',async(req:Request,res:Response)=>{
    res.send("Hello User!")
})

app.use(globalErrorhandler)
app.use(notFountRoute)


export default app;