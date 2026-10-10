import notas  from './controller/notasController.js';
import usuarios from './controller/usuariosController.js';
import textos from './controller/textosController.js';

export default function rotas(api){
    api.use(notas);
    api.use(usuarios);
    api.use(textos);
}

