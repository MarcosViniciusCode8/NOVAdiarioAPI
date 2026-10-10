import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY;

export function gerarToken(usuario) {
    return jwt.sign(
        {
            id_usuario: usuario.id_usuario,
            tipo: 'usuario'
        },
        SECRET_KEY,
        { expiresIn: '1h' }
    );
}