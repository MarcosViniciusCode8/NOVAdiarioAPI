import * as DbTextos from '../../repository/textosRepository.js';
import { ExcluirTextoValidation } from '../../validation/textoValidation.js';

export async function ExcluirTextoService(id) {
    ExcluirTextoValidation(id);

    let resposta = await DbTextos.ExcluirTexto(id);
    return resposta;
}
