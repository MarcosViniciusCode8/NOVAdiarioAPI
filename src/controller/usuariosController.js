import { Router } from "express";
const endpoints = Router();
import { UsuarioCadastro } from '../service/usuario/usuarioCadastroService.js';
import { LoginUsuario } from '../service/usuario/usuarioLoginService.js';
import { AlterarUsernameService } from '../service/usuario/alterarUsernameService.js';
import { AlterarSenhaService } from '../service/usuario/alterarSenhaService.js';
import { AlterarEmailService } from '../service/usuario/alterarEmailService.js';
import { validarToken } from "../utils/validarTokenUtils.js";

endpoints.post('/usuario/cadastro', async (req, resp) => {
    try {

        let conta = req.body;

        let resposta = await UsuarioCadastro(conta)

        resp.send({
            resposta: resposta
        });
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
});

endpoints.post('/usuario/login', async (req, resp) => {
    try {
        let conta = req.body;

        let token = await LoginUsuario(conta);

        resp.send({
            token: token
        });
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
});

endpoints.put('/usuario/alterarUsername', validarToken, async (req, resp) => {
    try {
        let conta = req.body;
        let id_usuario = req.usuario.id_usuario;

        let resposta = await AlterarUsernameService(conta, id_usuario);

        resp.send({
            resposta: resposta
        })

    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
})

endpoints.put('/usuario/alterarSenha', validarToken, async (req, resp) => {
    try {
        let conta = req.body;
        let id_usuario = req.usuario.id_usuario;

        let resposta = await AlterarSenhaService(conta, id_usuario);

        resp.send({
            resposta: resposta
        })
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
})

endpoints.put('/usuario/alterarEmail', validarToken, async (req, resp) => {
    try {
        let conta = req.body;
        let id_usuario = req.usuario.id_usuario;

        let resposta = await AlterarEmailService(conta, id_usuario);

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
