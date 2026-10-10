import * as DbNotas from '../../repository/notasRepository.js';
import { ExcluirNotaValidation } from '../../validation/notaValidation.js';

export async function ExcluirNotaService(id, id_usuario) {
    await ExcluirNotaValidation(id, id_usuario)
        let resposta = await DbNotas.ExcluirNota(id,id_usuario)
    return resposta;
}