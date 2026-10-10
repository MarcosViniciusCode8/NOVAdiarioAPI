import * as DbUsuarios from '../../repository/usuariosRepository.js'
import { CriarUsuarioValidation } from '../../validation/usuarioValidation.js';

export async function UsuarioCadastro(conta){

await CriarUsuarioValidation(conta)

await CriarUsuarioValidation(conta)
        let resposta = await DbUsuarios.CriarUsuarioRepository(conta);
        return resposta;
}