import * as DbUsuarios from '../../repository/usuariosRepository.js';
import { CriarUsuarioValidation, UsuarioADMValidation } from '../../validation/usuarioValidation.js';

export async function CriarUsuarioADMService(id_usuario, conta) {
    await UsuarioADMValidation(id_usuario);
    await CriarUsuarioValidation(conta);

    let resposta = await DbUsuarios.CriarUsuarioADM(conta);
    return resposta;
}
