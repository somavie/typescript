let vegetais: string[]=['Tomate','Couve','Cenoura','Ussy']
let i:any;
console.log(vegetais)

for(i in vegetais){

    console.log(vegetais[i]);

}

let v:string[]=[''];

i=0;
let a:boolean=true
while (a) {
    
    v[i]="a"+i


    i++
if(i===5){

    a=false;
}    

}

console.log(v)
