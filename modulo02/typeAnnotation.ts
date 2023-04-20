
//=======> Variaveis{type Annotations}
let nome: string='Bruno Somavie'
console.log(nome);

//=======> Arrays[Type annotations]
let animais: string[]=['Pato', 'Galinha','Elefante', 'Girafa']
console.log(animais);

//====> Objecto

let carro:{

    nome:string;
    ano:number;
    preco:number

};

carro={nome:'Toyota Land cruiser',ano:2023,preco:20000000}

console.log(carro);


//=====> functions [type annotations]

function multiplicar(num1:number,num2:number){

return num1*num2;

}

console.log(multiplicar(9,3));