import { LoginUsuarioValidation} from '../../validation/usuarioValidation.js';
import { BuscarUsuarioUsername } from '../../repository/usuariosRepository.js';
import { gerarToken } from '../../utils/TokensUtils.js';

export async function LoginUsuario(conta) {
    let usuario = await BuscarUsuarioUsername(conta.username);

    LoginUsuarioValidation(usuario, conta);

    let token = gerarToken(usuario);

    return token;
}