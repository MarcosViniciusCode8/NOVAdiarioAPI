import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';
import rotas from './routes.js';
import './utils/global.js';

const api = express();
api.use(express.json());
api.use(cors());
rotas(api);

const porta = process.env.PORT;

api.listen(porta,() => console.log("A API subiu com sucesso na porta: " + porta))
