import * as DbNotas from '../repository/notasRepository.js';

export function CriarNotaValidation(nota) {
    if (!nota.cor) throw new Error("A cor é obrigatória");


    let cor = nota.cor.toLowerCase();

    if (
        cor != 'azul' &&
        cor != 'vermelho' &&
        cor != 'amarelo' &&
        cor != 'verde' &&
        cor != 'laranja' &&
        cor != 'roxo' &&
        cor != 'rosa' &&
        cor != 'marrom' &&
        cor != 'preto' &&
        cor != 'branco' &&
        cor != 'cinza'
    ) {
        throw new Error('A cor deve ser azul, vermelho, amarelo, verde, laranja, roxo, rosa, marrom, preto, branco ou cinza');
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
        cor != 'vermelho' &&
        cor != 'amarelo' &&
        cor != 'verde' &&
        cor != 'laranja' &&
        cor != 'roxo' &&
        cor != 'rosa' &&
        cor != 'marrom' &&
        cor != 'preto' &&
        cor != 'branco' &&
        cor != 'cinza'
    ) {
        throw new Error('A cor deve ser azul, vermelho, amarelo, verde, laranja, roxo, rosa, marrom, preto, branco ou cinza');
    }

    if(!nota.titulo) throw new Error("O titulo é obrigatório");

    if(!nota.texto) throw new Error("O texto é obrigatório");

    if(nota.titulo.length > 60) throw new Error("O titulo pode ter no máximo 60 caractéres");

    if(!id_nota) throw new Error("O id é necessário");

    if(isNaN(id_nota)) throw new Error("O id é necessáriamente Number");
    
    let possivel = await DbNotas.AprovarMudanca(id_nota, id_usuario)
    if(!possivel) throw new Error("Voce nao tem permissão pra essa nota");
    

}