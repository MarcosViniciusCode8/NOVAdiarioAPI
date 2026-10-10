import con from './conexao/connection.js';

export async function CriarNota(id,nota){
    let command = `
INSERT INTO notas(ID_usuario, cor, titulo, texto, favorita)
VALUES(?, ?, ?, ?, false);
    `

    let cor = nota.cor.toLowerCase();

    let [resultado] = await con.query(command, [
        id,
        cor,
        nota.titulo,
        nota.texto
    ])
    return resultado.insertId
}

export async function EditarNota(id_nota,nota){
    let command = `
    UPDATE notas
    SET
    cor = ?,
    titulo = ?,
    texto = ?
    WHERE ID_nota = ?
    `

    let [resultado] = await con.query(command, [
        nota.cor,
        nota.titulo,
        nota.texto,
        id_nota
    ])
    return resultado.affectedRows;
}

export async function ExcluirNota(id_nota){
    let command = `
    DELETE FROM notas
    WHERE ID_nota = ?
    `

    let [resposta] = await con.query(command,[id_nota])
    return resposta.affectedRows;
}


export async function AprovarMudanca(id,id_usuario){
    let command = `
    SELECT ID_nota, ID_usuario, titulo
    FROM notas
    WHERE ID_nota = ? AND ID_usuario = ?
    `

    let [resultado] = await con.query(command, [id, id_usuario])
    return resultado[0];
}

export async function FavoritarNota(id){
    let command = `
    UPDATE notas
    SET favorita = TRUE
    WHERE ID_nota = ?
    `

    let [resultado] = await con.query(command, [id])
    return resultado.affectedRows;
}

export async function DesfavoritarNota(id) {
        let command = `
    UPDATE notas
    SET favorita = FALSE
    WHERE ID_nota = ?
    `

    let [resultado] = await con.query(command, [id])
    return resultado.affectedRows;
}

export async function VisualizarNotas(){
    let command = `
SELECT 
favorita,
titulo,
texto,
cor,
data_criacao
FROM notas
ORDER BY favorita DESC;
    `
    let [resultado] = await con.query(command,[])
    return resultado;
}