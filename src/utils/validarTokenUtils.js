import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY;

export function validarToken(req, resp, next) {
    let autorizacao = req.headers.authorization;

    if (!autorizacao) {
        return resp.status(401).send({
            erro: 'Token não enviado'
        });
    }

    let token = autorizacao.split(' ')[1];

    if (!token) {
        return resp.status(401).send({
            erro: 'Token não foi informado'
        });
    }

    try {
        let dados = jwt.verify(token, SECRET_KEY);

        req.usuario = dados;

        next();
    } catch (erro) {
        return resp.status(401).send({
            erro: 'Token inválido ou expirado'
        });
    }
}