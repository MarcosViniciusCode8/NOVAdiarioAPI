import con from './conexao/connection.js';

export async function CriarNota(id,nota){
    let command = `
    INSERT INTO notas(ID_usuario, cor, titulo, texto)
    VALUES(?,?,?,?)
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

export async function AprovarMudanca(id,id_usuario){
    let command = `
    SELECT ID_nota, ID_usuario, titulo
    FROM notas
    WHERE ID_nota = ? AND ID_usuario = ?
    `

    let [resultado] = await con.query(command, [id, id_usuario])
    return resultado[0];
}