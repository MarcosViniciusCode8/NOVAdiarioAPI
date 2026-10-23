import * as DbNotas from '../repository/notasRepository.js';

export function CriarNotaValidation(nota) {
    if (!nota.cor) throw new Error("A cor é obrigatória");


    let cor = nota.cor.toLowerCase();

    if (
        cor != 'azul' &&
        cor != 'rosa' &&
        cor != 'amarelo' &&
        cor != 'verde' &&
        cor != 'lilas' &&
        cor != 'pessego' &&
        cor != 'menta' &&
        cor != 'coral' &&
        cor != 'bege' &&
        cor != 'cinza' &&
        cor != 'azul-lavanda'
    ) {
        throw new Error('A cor deve ser azul, rosa, amarelo, verde, lilas, pessego, menta, coral, bege, cinza ou azul-lavanda');
    }

    if(!nota.titulo) throw new Error("O titulo é obrigatório");

    if(!nota.texto) throw new Error("O texto é obrigatório");

    if(nota.titulo.length > 60) throw new Error("O titulo pode ter no máximo 60 caractéres");

}

export async function EditarNotaValidation(id_nota,nota,id_usuario){
        if (!nota.cor) throw new Error("A cor é obrigatória");


    let cor = nota.cor.toLowerCase();

    if (
        cor != 'azul' &&
        cor != 'rosa' &&
        cor != 'amarelo' &&
        cor != 'verde' &&
        cor != 'lilas' &&
        cor != 'pessego' &&
        cor != 'menta' &&
        cor != 'coral' &&
        cor != 'bege' &&
        cor != 'cinza' &&
        cor != 'azul-lavanda'
    ) {
        throw new Error('A cor deve ser azul, rosa, amarelo, verde, lilas, pessego, menta, coral, bege, cinza ou azul-lavanda');
    }

    if(!nota.titulo) throw new Error("O titulo é obrigatório");

    if(!nota.texto) throw new Error("O texto é obrigatório");

    if(nota.titulo.length > 60) throw new Error("O titulo pode ter no máximo 60 caractéres");

    if(!id_nota) throw new Error("O id é necessário");

    if(isNaN(id_nota)) throw new Error("O id é necessáriamente Number");
    
    let possivel = await DbNotas.AprovarMudanca(id_nota, id_usuario)
    if(!possivel) throw new Error("Voce nao tem permissão pra essa nota");
    

}

export async function ExcluirNotaValidation(id, id_usuario){
    if(!id) throw new Error("O id é necessário");

    if(isNaN(id)) throw new Error("O id é necessáriamente Number");

        let possivel = await DbNotas.AprovarMudanca(id, id_usuario)
    if(!possivel) throw new Error("Voce nao tem permissão pra essa nota");
}

export async function FavoritaNotaValidation(id, id_usuario){
    if(!id) throw new Error("O id é necessário");

    if(isNaN(id)) throw new Error("O id é necessáriamente Number");

        let possivel = await DbNotas.AprovarMudanca(id, id_usuario)
    if(!possivel) throw new Error("Voce nao tem permissão pra essa nota");
}

export async function DesfavoritaNotaValidation(id, id_usuario){
    if(!id) throw new Error("O id é necessário");

    if(isNaN(id)) throw new Error("O id é necessáriamente Number");

        let possivel = await DbNotas.AprovarMudanca(id, id_usuario)
    if(!possivel) throw new Error("Voce nao tem permissão pra essa nota");
}