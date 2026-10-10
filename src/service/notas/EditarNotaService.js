import * as DbNotas from '../../repository/notasRepository.js';
import { EditarNotaValidation } from '../../validation/notaValidation.js';

export async function EditarNotaService(id_nota,nota) {
    
    EditarNotaValidation(id_nota,nota)
    let resposta = await DbNotas.EditarNota(id_nota, nota)
    return resposta;
}