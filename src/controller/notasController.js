import { Router } from "express";
const endpoints = Router();
import { CriarNotaService } from "../service/notas/CriarNotaService.js";
import { EditarNotaService } from "../service/notas/EditarNotaService.js";
import { ExcluirNotaService } from "../service/notas/ExcluirNotaService.js";
import { FavoritarNotaService } from "../service/notas/FavoritarNotaService.js";
import { validarToken } from "../utils/validarTokenUtils.js";

import * as DbNotas from '../repository/notasRepository.js';
import { DesfavoritarNotaService } from "../service/notas/DesfavoritarNotaService.js";

endpoints.post('/notas/criar', validarToken, async (req, resp) => {
    try {

        let id_usuario = req.usuario.id_usuario;
        let nota = req.body;

        let resposta = await CriarNotaService(id_usuario, nota)

        resp.send({
            resposta: resposta
        })
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
})

endpoints.put('/notas/editar/:id', validarToken, async (req, resp) => {
    try {
        let id_nota = req.params.id
        let nota = req.body;
        let id_usuario = req.usuario.id_usuario;;

        let resposta = await EditarNotaService(id_nota, nota, id_usuario)

        resp.send({
            resposta: resposta
        })
    }

    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
})

endpoints.delete('/notas/excluir/:id', validarToken, async (req, resp) => {
    try {
        let id = req.params.id;
        let id_usuario = req.usuario.id_usuario;

        let resposta = await ExcluirNotaService(id, id_usuario)

        resp.send({
            resposta: resposta
        })
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
})

endpoints.put('/notas/favoritar/:id', validarToken, async (req, resp) => {
    try {
        let id = req.params.id;
        let id_usuario = req.usuario.id_usuario;

        let resposta = await FavoritarNotaService(id, id_usuario);

        resp.send({
            resposta: resposta
        })
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
})

endpoints.put('/notas/desfavoritar/:id', validarToken, async (req, resp) => {
    try {
        let id = req.params.id;
        let id_usuario = req.usuario.id_usuario;

        let resposta = await DesfavoritarNotaService(id, id_usuario)

        resp.send({
            resposta: resposta
        })
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
})

endpoints.get('/notas/visualizar', validarToken, async (req, resp) => {
    try { 
        let resposta = await DbNotas.VisualizarNotas()

        resp.send({
            resposta:resposta
        })
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
})

export default endpoints;