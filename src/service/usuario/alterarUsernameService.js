import * as DbUsuarios from '../../repository/usuariosRepository.js';
import { AlterarUsernameValidation } from '../../validation/usuarioValidation.js';

export async function AlterarUsernameService(conta, id_usuario) {
    let username = conta?.username;

    await AlterarUsernameValidation(username, id_usuario);

    let resposta = await DbUsuarios.AlterarUsername(username, id_usuario);
    return resposta;
}
