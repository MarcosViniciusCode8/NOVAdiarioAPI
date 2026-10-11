import con from './conexao/connection.js';


export async function CriarUsuarioRepository(conta) {

    let command = `
INSERT INTO usuarios(nome, username, email, senha, data_nascimento, permissao)
VALUES(?, ?, ?, ?, ?, FALSE);
    `;

    let [resposta] = await con.query(command, [
        conta.nome,
        conta.username,
        conta.email,
        conta.senha,
        conta.data
    ]);

    return resposta.insertId;
}

export async function BuscarUsuarioEmail(email) {

    let command = `
        SELECT ID_usuario, username, email, senha
        FROM usuarios
        WHERE email = ?
    `;

    let [resultado] = await con.query(command, [email]);

    return resultado[0];
}

export async function BuscarUsuarioUsername(username) {
    let command = `
        SELECT ID_usuario, username, email, senha
        FROM usuarios
        WHERE username = ?
    `;

    let [resultado] = await con.query(command, [username]);

    return resultado[0];
}

export async function BuscarPermissaoUsuario(id_usuario) {
    let command = `
        SELECT permissao
        FROM usuarios
        WHERE ID_usuario = ?
    `;

    let [resultado] = await con.query(command, [id_usuario]);

    if (!resultado[0]) return false;

    return resultado[0].permissao;
}



export async function AlterarUsername(username, id_usuario) {
    let command = `
    UPDATE usuarios
    SET username = ?
    WHERE ID_usuario = ?
    `

    let [resultado] = await con.query(command, [username, id_usuario])
    return resultado.affectedRows;
}

export async function AlterarSenha(senha, id_usuario) {
    let command = `
    UPDATE usuarios
    SET senha = ?
    WHERE ID_usuario = ?
    `

    let [resultado] = await con.query(command, [senha, id_usuario])
    return resultado.affectedRows;
}

export async function AlterarEmail(email, id_usuario) {
    let command = `
    UPDATE usuarios
    SET email = ?
    WHERE ID_usuario = ?
    `

    let [resultado] = await con.query(command, [email, id_usuario])
    return resultado.affectedRows;
}

export async function ImagemUsuario(idUsuario, imagem) {
    const command = `
        UPDATE usuarios
        SET imagem = ?
        WHERE ID_usuario = ?
    `

    await con.query(command, [imagem, idUsuario]);
}

export async function ExcluirUsuario(id_usuario) {
    let command = `
    DELETE FROM usuarios 
    WHERE ID_usuario = ?
    `

    let [resultado] = await con.query(command, [id_usuario])
    return resultado.affectedRows;
}

export async function ListarUsuariosADM() {
    let command = `
    SELECT 
    ID_usuario,
    nome,
    username,
    email,
    data_nascimento,
    permissao
    FROM usuarios
    `
    let [resultado] = await con.query(command, [])
    return resultado;
}

export async function ExcluirUsuariosADM(username) {
    let command = `
    DELETE FROM usuarios
    WHERE username = ?
    `
    let [resultado] = await con.query(command, [username])
    return resultado.affectedRows;
}

export async function CriarUsuarioADM(conta) {

    let command = `
INSERT INTO usuarios(nome, username, email, senha, data_nascimento, permissao)
VALUES(?, ?, ?, ?, ?, TRUE);
    `;

    let [resposta] = await con.query(command, [
        conta.nome,
        conta.username,
        conta.email,
        conta.senha,
        conta.data
    ]);

    return resposta.insertId;
}
