import * as DbUsuarios from '../../repository/usuariosRepository.js';
import { UsuarioADMValidation } from '../../validation/usuarioValidation.js';

export async function ListarUsuariosADMService(id_usuario) {
    await UsuarioADMValidation(id_usuario);

    let resposta = await DbUsuarios.ListarUsuariosADM();
    return resposta;
}
