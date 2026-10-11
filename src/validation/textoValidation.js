export function CriarTextoValidation(id_usuario, preferencia) {
    if (!id_usuario) throw new Error("O id é necessário");

    if (isNaN(id_usuario)) throw new Error("O id é necessáriamente Number");

    if (!preferencia) throw new Error("A preferência é obrigatória");

    if (preferencia.length > 50) throw new Error("A preferência pode ter no máximo 50 caractéres");
}

export function ExcluirTextoValidation(id) {
    if (!id) throw new Error("O id é necessário");

    if (isNaN(id)) throw new Error("O id é necessáriamente Number");
}

export function VisualizarPreferenciasValidation(id_usuario) {
    if (!id_usuario) throw new Error("O id é necessário");

    if (isNaN(id_usuario)) throw new Error("O id é necessáriamente Number");
}
