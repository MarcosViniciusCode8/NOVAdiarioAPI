import * as DbUsuarios from '../../repository/usuariosRepository.js';
import { AlterarEmailValidation } from '../../validation/usuarioValidation.js';

export async function AlterarEmailService(conta, id_usuario) {
    let email = conta?.email;

    await AlterarEmailValidation(email, id_usuario);

    let resposta = await DbUsuarios.AlterarEmail(email, id_usuario);
    return resposta;
}
