"use strict";
let vegetais = ['Tomate', 'Couve', 'Cenoura', 'Ussy'];
let i;
console.log(vegetais);
for (i in vegetais) {
    console.log(vegetais[i]);
}
let v = [''];
i = 0;
let a = true;
while (a) {
    v[i] = "a" + i;
    i++;
    if (i === 5) {
        a = false;
    }
}
console.log(v);
