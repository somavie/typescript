"use strict";
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    info() {
        return `Meu nome é ${this.getnome()} e minha idade é de ${this.getidade()}`;
    }
    getnome() {
        return this.nome;
    }
    setnome(nome) { this.nome = nome; }
    getidade() {
        return this.idade;
    }
    setidade(idade) { this.idade = idade; }
}
/*
class Pessoa1 {
    nome: string;
    idade: number;
    estaVivo: boolean;
    
    constructor(nome: string, idade: number, estaVivo: boolean){
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estaVivo;
    }
}
*/
const p = new Pessoa("Bruno", 26);
console.log(p.info());
