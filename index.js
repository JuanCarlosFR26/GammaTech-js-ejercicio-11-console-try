import { countries } from "./countries.js";
import { countriesObj } from "./countries_data.js";

// Ejercicios

// Ejercicios:Nivel 1

// Mostrar la matriz de países como una tabla
console.table(countries);

console.log('=================================');

// Mostrar el objeto países como una tabla
console.table(countriesObj);

console.log('=================================');


// Utilice console.group() para agrupar los registros
console.group("Countries");
console.log(countries);
console.log(countriesObj);
console.groupEnd();


console.log('=================================');


// Ejercicios:Nivel 2

// 10 > 2 * 10 use console.assert()
console.assert(10 > 2 * 10, "Esa afirmación no es cierta");

console.log('=================================');

// Escribe un mensaje de advertencia utilizando console.warn()
console.warn("Advertencia con console.warn()");

console.log('=================================');

// Escribe un mensaje de error utilizando console.error()
console.error("Mensaje de error de la consola");

console.log('=================================');


// Ejercicios:Nivel 3

// Comprueba la diferencia de velocidad entre los siguientes bucles: while, for, for of, forEach
let num = 0;
let arrNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.time('Bucle while');
while(num < 10) {
    num++;
    console.log(num);
}
console.timeEnd('Bucle while');

console.time('Bucle for')
for(let i = 0; i < 10; i++) {
    console.log(i);
}
console.timeEnd('Bucle for')

console.time('Bucle for of');
for(const n of arrNums) {
    console.log(n);
}
console.timeEnd('Bucle for of');

console.time('Bucle forEach');
arrNums.forEach(e => console.log(e));
console.timeEnd('Bucle forEach');
