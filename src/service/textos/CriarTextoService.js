import * as DbTextos from '../../repository/textosRepository.js';
import { CriarTextoValidation } from '../../validation/textoValidation.js';

export async function CriarTextoService(id_usuario, preferencia) {
    CriarTextoValidation(id_usuario, preferencia);

    let resposta = await DbTextos.CriarTexto(id_usuario, preferencia);
    return resposta;
}
