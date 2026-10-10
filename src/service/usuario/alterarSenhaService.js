import * as DbUsuarios from '../../repository/usuariosRepository.js';
import { AlterarSenhaValidation } from '../../validation/usuarioValidation.js';

export async function AlterarSenhaService(conta, id_usuario) {
    let senha = conta?.senha;

    AlterarSenhaValidation(senha);

    let resposta = await DbUsuarios.AlterarSenha(senha, id_usuario);
    return resposta;
}
