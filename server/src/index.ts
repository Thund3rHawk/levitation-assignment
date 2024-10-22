import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import authRoute from '../src/routes/auth.routes'
import productsRoute from '../src/routes/product.routes'
dotenv.config();

const app = express();
const port = process.env.PORT || 4000
app.use (cors());

app.use ('/api',authRoute)
app.use ('/api',productsRoute)

app.listen (port, ()=>{
    console.log(`app is listening on port: http://localhost:${port}`);    
})