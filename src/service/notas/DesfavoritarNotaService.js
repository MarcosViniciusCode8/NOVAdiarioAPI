import * as DbNotas from '../../repository/notasRepository.js';
import { DesfavoritaNotaValidation } from '../../validation/notaValidation.js';

export async function DesfavoritarNotaService(id, id_usuario) {
    await DesfavoritaNotaValidation(id, id_usuario)
    let resposta = await DbNotas.DesfavoritarNota(id, id_usuario)
    return resposta;
}
