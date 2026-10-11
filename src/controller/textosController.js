import { Router } from "express";
const endpoints = Router();
import { validarToken } from '../utils/validarTokenUtils.js';
import { CriarTextoService } from '../service/textos/CriarTextoService.js';
import { ExcluirTextoService } from '../service/textos/ExcluirTextoService.js';
import { VisualizarPreferenciasService } from '../service/textos/VisualizarPreferenciasService.js';

endpoints.post('/textos/criar', validarToken, async (req, resp) => {
    try {
        let id_usuario = req.usuario.id_usuario;
        let preferencia = req.body.preferencia;

        let resposta = await CriarTextoService(id_usuario, preferencia);

        resp.send({
            resposta: resposta
        });
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
});

endpoints.delete('/textos/excluir/:id', validarToken, async (req, resp) => {
    try {
        let id = req.params.id;

        let resposta = await ExcluirTextoService(id);

        resp.send({
            resposta: resposta
        });
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
});

endpoints.get('/textos/visualizar', validarToken, async (req, resp) => {
    try {
        let id_usuario = req.usuario.id_usuario;

        let resposta = await VisualizarPreferenciasService(id_usuario);

        resp.send({
            resposta: resposta
        });
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
});


export default endpoints;
