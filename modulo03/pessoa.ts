class Pessoa{

    private nome: String;
    private idade:number;

    constructor(nome: String, idade: number){
  
    this.nome = nome;
      
    this.idade=idade;

    }

        info():string{

            return `Meu nome é ${this.getnome()} e minha idade é de ${this.getidade()}`;
        }


        getnome(){

            return this.nome;
        }

        setnome(nome:string){ this.nome=nome}

        
        getidade(){

            return this.idade;
        }

        setidade(idade:number){ this.idade=idade}

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

const p= new Pessoa("Bruno",26);
console.log(p.info());