import * as DbNotas from '../../repository/notasRepository.js';
import { EditarNotaValidation } from '../../validation/notaValidation.js';

export async function EditarNotaService(id_nota,nota, id_usuario) {
    
    await EditarNotaValidation(id_nota,nota, id_usuario)
    let resposta = await DbNotas.EditarNota(id_nota, nota, id_usuario)
    return resposta;
}