import * as DbUsuarios from '../../repository/usuariosRepository.js';
import { ImagemUsuarioErrors } from '../../validation/usuarioValidation.js';

export async function ImagemUsuarioService(idUsuario, file) {
    ImagemUsuarioErrors(file);

    const imagem = `/uploads/ImagemUsuarios/${file.filename}`;

    await DbUsuarios.ImagemUsuario(idUsuario, imagem);

    return imagem;
}