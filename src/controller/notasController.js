import { Router } from "express";
const endpoints = Router();
import { CriarNotaService } from "../service/notas/CriarNotaService.js";
import { EditarNotaService } from "../service/notas/EditarNotaService.js";
import { validarToken } from "../utils/validarTokenUtils.js";

import * as DbNotas from '../repository/notasRepository.js';

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

        let resposta = await EditarNotaService(id_nota, nota)

        resp.send({
            resposta: resposta
        })
    }

    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
})

export default endpoints;