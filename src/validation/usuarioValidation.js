import * as DBusuario from '../repository/usuariosRepository.js';
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function CriarUsuarioValidation(conta) {
    if (!conta?.nome) throw new Error("O campo de 'nome' deve ser preenchido obrigatóriamente");

    if (!conta.username) throw new Error("O campo de 'username' deve ser preenchido obrigatóriamente");

    if (!conta.email) throw new Error("O campo de 'email' deve ser preenchido obrigatóriamente");

    if (!conta.senha) throw new Error("O campo de 'senha' deve ser preenchido obrigatóriamente");

    if (!conta.data) throw new Error("O campo de 'data' deve ser preenchido obrigatóriamente");

    if (conta.nome.length > 200) throw new Error("O limite máximo de caractéres do nome são 200");

    if (conta.username.length > 20) throw new Error("O limite máximo de caractéres do username são 20");

    if (conta.senha.length > 40) throw new Error("O limite máximo de caractéres de senha são 40");

    if (conta.senha.length < 8) throw new Error("A senha deve ter no minimo 8 caractéres");

    let userFeito = await DBusuario.BuscarUsuarioUsername(conta.username)

    if (userFeito) throw new Error("username já cadastrado");

    if (!regexEmail.test(conta.email)) throw new Error("Email inválido");

    let emailFeito = await DBusuario.BuscarUsuarioEmail(conta.email);

    if (emailFeito) throw new Error("email já cadastrado");

}

export function LoginUsuarioValidation(usuario, conta) {
    if (!usuario) {
        throw new Error('Username não encontrado');
    }

    if (usuario.senha != conta?.senha) {
        throw new Error('Senha incorreta');
    }
}

export async function AlterarUsernameValidation(username, id_usuario) {
    if (!username) throw new Error("O campo de 'username' deve ser preenchido obrigatóriamente");

    if (username.length > 20) throw new Error("O limite máximo de caractéres do username são 20");

    let usuario = await DBusuario.BuscarUsuarioUsername(username);

    if (usuario && usuario.ID_usuario != id_usuario) {
        throw new Error('username já cadastrado');
    }
}

export function AlterarSenhaValidation(senha) {
    if (!senha) throw new Error("O campo de 'senha' deve ser preenchido obrigatóriamente");

    if (senha.length > 40) throw new Error("O limite máximo de caractéres de senha são 40");

    if (senha.length < 8) throw new Error("A senha deve ter no minimo 8 caractéres");
}

export async function AlterarEmailValidation(email, id_usuario) {
    if (!email) throw new Error("O campo de 'email' deve ser preenchido obrigatóriamente");

    if (!regexEmail.test(email)) throw new Error('Email inválido');

    let usuario = await DBusuario.BuscarUsuarioEmail(email);

    if (usuario && usuario.ID_usuario != id_usuario) {
        throw new Error('email já cadastrado');
    }
}

export function ImagemUsuarioErrors(file) {
    if (!file) {
        throw new Error("Imagem não enviada");

    }
}

export function ExcluirContaValidation(id_usuario) {
    if (!id_usuario) throw new Error("O id é necessário");

    if (isNaN(id_usuario)) throw new Error("O id é necessáriamente Number");
}
