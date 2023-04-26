class Bombas{

private nome: string;
private estado:number;
private latitude:number;
private longitude:Number;
 
constructor(nome:string,estado:number,lat:number,long:number){
    this.estado=estado;
    this.latitude=lat;
    this.longitude=long;
    this.nome=nome;
}

getnome(){return this.nome;}
setnome(nome:string){this.nome=nome;}

getestado(){return this.estado;}
setestado(estado:number){this.estado=estado;}


getlongitude(longitude:number){return this.longitude;}
setlongitude(longitude:number){this.longitude=longitude;}


getlatitude(){return this.latitude;}
setlatitude(latitude:number){this.latitude=latitude;}

}



let b=new Bombas('Pumangol',1,0.12345,-0.2222);

console.log(`${b} Olá carissimo`);