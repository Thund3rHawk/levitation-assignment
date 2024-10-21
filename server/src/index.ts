import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config();

const app = express();
const port = process.env.PORT || 4000
app.use (cors());

app.get ('/', (req,res)=>{
    res.send ("levitation assignment backend");
})

app.listen (port, ()=>{
    console.log(`app is listening on port: http://localhost:${port}`);    
})