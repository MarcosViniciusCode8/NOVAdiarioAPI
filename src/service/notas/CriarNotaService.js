import * as DbNotas from '../../repository/notasRepository.js';
import { CriarNotaValidation } from '../../validation/notaValidation.js';

export async function CriarNotaService(id_usuario, nota) {

    CriarNotaValidation(nota)
    let resposta = await DbNotas.CriarNota(id_usuario, nota);
    return resposta
}