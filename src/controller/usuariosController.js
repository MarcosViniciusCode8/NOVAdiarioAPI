import { Router } from "express";
const endpoints = Router();
import { UsuarioCadastro } from '../service/usuario/usuarioCadastroService.js';
import { LoginUsuario } from '../service/usuario/usuarioLoginService.js';
import { AlterarUsernameService } from '../service/usuario/alterarUsernameService.js';
import { AlterarSenhaService } from '../service/usuario/alterarSenhaService.js';
import { AlterarEmailService } from '../service/usuario/alterarEmailService.js';
import { ImagemUsuarioService } from "../service/usuario/alterarImagemService.js";
import { excluircontaService } from '../service/usuario/ExcluirContaService.js';
import { ListarUsuariosADMService } from '../service/usuario/ListarUsuariosADMService.js';
import { ExcluirUsuariosADMService } from '../service/usuario/ExcluirUsuariosADMService.js';
import { CriarUsuarioADMService } from '../service/usuario/CriarUsuarioADMService.js';
import { validarToken } from "../utils/validarTokenUtils.js";



import multer from 'multer';
const uploadUsuario = multer({ dest: 'src/uploads/ImagemUsuarios' });


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

endpoints.put('/usuario/alterarImagem', validarToken, uploadUsuario.single('imagem'), async (req, resp) => {
    try {
        let usuario = req.usuario.id_usuario;
        const imagem = await ImagemUsuarioService(usuario, req.file);

        resp.send({ imagem });
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
})

endpoints.delete('/usuario/excluirconta', validarToken, async (req, resp) => {
    try {
        let usuario = req.usuario.id_usuario;

        let resposta = await excluircontaService(usuario)

        resp.send({
            resposta: resposta
        })
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
})

endpoints.get('/usuario/listarADM', validarToken, async (req, resp) => {
    try {
        let id_usuario = req.usuario.id_usuario;

        let resposta = await ListarUsuariosADMService(id_usuario);

        resp.send({
            resposta: resposta
        });
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
})

endpoints.delete('/usuario/excluirADM/:username', validarToken, async (req, resp) => {
    try {
        let id_usuario = req.usuario.id_usuario;
        let username = req.params.username;

        let resposta = await ExcluirUsuariosADMService(id_usuario, username);

        resp.send({
            resposta: resposta
        });
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
})

endpoints.post('/usuario/cadastroADM', validarToken, async (req, resp) => {
    try {
        let id_usuario = req.usuario.id_usuario;
        let conta = req.body;

        let resposta = await CriarUsuarioADMService(id_usuario, conta);

        resp.send({
            resposta: resposta
        });
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
})



export default endpoints;
