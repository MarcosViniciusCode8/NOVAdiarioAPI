import { Router } from "express";
const endpoints = Router();
import { CriarNotaService} from "../service/notas/CriarNotaService.js";
import { validarToken } from "../utils/validarTokenUtils.js";


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

export default endpoints;