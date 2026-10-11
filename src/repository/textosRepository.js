import con from './conexao/connection.js';


export async function CriarTexto(id, pref) {
    let command = `
    INSERT INTO  textos_preferencias(ID_usuario, preferencia)
    VALUES(?,?)
    `

    let [resposta] = await con.query(command, [id, pref])
    return resposta.insertId;
}

export async function ExcluirTexto(id) {
    let command = `
    DELETE FROM textos_preferencias
    WHERE ID_texto = ?
    `

    let [resposta] = await con.query(command, [id])
    return resposta.insertId;
}

export async function VisualizarPreferencias(id){
    let command = `
    SELECT 
    ID_texto,
    preferencia
    FROM textos_preferencias
    WHERE ID_usuario = ?
    `
        let [resposta] = await con.query(command, [id])
    return resposta;
}