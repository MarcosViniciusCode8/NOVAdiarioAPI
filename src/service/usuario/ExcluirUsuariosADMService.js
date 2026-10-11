import * as DbUsuarios from '../../repository/usuariosRepository.js';
import { UsuarioADMValidation } from '../../validation/usuarioValidation.js';

export async function ExcluirUsuariosADMService(id_usuario, username) {
    await UsuarioADMValidation(id_usuario);

    if (!username) throw new Error("O username é necessário");

    let resposta = await DbUsuarios.ExcluirUsuariosADM(username);
    return resposta;
}
