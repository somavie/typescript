"use strict";
class Bombas {
    constructor(nome, estado, lat, long) {
        this.estado = estado;
        this.latitude = lat;
        this.longitude = long;
        this.nome = nome;
    }
    getnome() { return this.nome; }
    setnome(nome) { this.nome = nome; }
    getestado() { return this.estado; }
    setestado(estado) { this.estado = estado; }
    getlongitude(longitude) { return this.longitude; }
    setlongitude(longitude) { this.longitude = longitude; }
    getlatitude() { return this.latitude; }
    setlatitude(latitude) { this.latitude = latitude; }
}
let b = new Bombas('Pumangol', 1, 0.12345, -0.2222);
console.log(b);
