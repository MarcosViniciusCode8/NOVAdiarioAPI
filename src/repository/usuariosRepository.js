import con from './conexao/connection.js';

export async function CriarUsuarioRepository(conta) {

    let command = `
        INSERT INTO usuarios(nome, username,email, senha, data_nascimento)
        VALUES(?, ?, ?, ?, ?)
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

    let comando = `
        SELECT ID_usuario, username, email, senha
        FROM usuarios
        WHERE email = ?
    `;

    let [resultado] = await con.query(comando, [email]);

    return resultado[0];
}

export async function BuscarUsuarioUsername(username) {
    let comando = `
        SELECT ID_usuario, username, email, senha
        FROM usuarios
        WHERE username = ?
    `;

    let [resultado] = await con.query(comando, [username]);

    return resultado[0];
}