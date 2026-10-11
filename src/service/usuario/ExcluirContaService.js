
import * as DbUsuarios from '../../repository/usuariosRepository.js';
import { ExcluirContaValidation } from '../../validation/usuarioValidation.js';

export async function excluircontaService(usuario) {
    ExcluirContaValidation(usuario);

    let resposta = await DbUsuarios.ExcluirUsuario(usuario);
    return resposta;
}
