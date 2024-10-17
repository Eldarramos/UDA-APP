import express from 'express';
import cors from 'cors';
import user from './router/router.js';

const app = express();

// Middleware para analizar JSON
app.use(express.json());

app.use(cors({
    origin: '*',
    allowedHeaders: ['Authorization', 'Content-Type'],
    allowedMethods: ['GET', 'POST', 'PUT', 'DELETE'],
    allow_redirects: false,
}));



// Ruta de usuario
app.use('/Auth', user);

app.get('/', (req,res) =>{
    res.send("Prueba")
})



export default app;