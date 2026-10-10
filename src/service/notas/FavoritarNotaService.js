import * as DbNotas from '../../repository/notasRepository.js';
import { FavoritaNotaValidation } from '../../validation/notaValidation.js';

export async function FavoritarNotaService(id , id_usuario) {
    await FavoritaNotaValidation(id, id_usuario)
    let resposta = await DbNotas.FavoritarNota(id)
    return resposta
}