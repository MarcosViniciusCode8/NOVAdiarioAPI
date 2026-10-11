import * as DbTextos from '../../repository/textosRepository.js';
import { VisualizarPreferenciasValidation } from '../../validation/textoValidation.js';

export async function VisualizarPreferenciasService(id_usuario) {
    VisualizarPreferenciasValidation(id_usuario);

    let resposta = await DbTextos.VisualizarPreferencias(id_usuario);
    return resposta;
}
