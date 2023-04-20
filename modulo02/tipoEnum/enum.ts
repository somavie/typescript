//======> exemplo 01:numeric Enums(Enums Numerico)
/*
enum Idioma{

Portugues,
Espanhol,
Ingles,
Frances,

};

console.log(Idioma);


enum Dia{

Segunda='Seg',
Terca='Ter',
Quarta='Qua',
Quinta='Qui',
Sexta='Sex',

}

console.log(Dia);


const enum Comida{

Hamburguer,
Massa,
Torta,
Pizza,
Churrasco,

}

function comida(c:Comida){
    return 'comidas muito apetitosas'

}

console.log(comida(Comida.Pizza));

*/

// Quando usar o Enum?!

enum Tarefa{

    Todo,
    Progress,
    Done,
}

const concluidaTarefa={

    id: 1,
    status: Tarefa.Done,
    descricao: 'Parabens! Tarefa concluida com sucesso',
};


if(concluidaTarefa.status== Tarefa.Done)
{
 console.log('Enviar e-mail: Tarefa Concluida');
}


