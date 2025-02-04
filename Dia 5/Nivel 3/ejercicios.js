import {countries} from './countries.js'

// En el siguiente array
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// - Ordene el array y encuentre la edad mínima y máxima
console.log(ages.sort());
console.log("La edad minima es:", Math.min(...ages) );
console.log("La edad maxima es:", Math.max(...ages));
console.log("------------");

// - Encuentre la edad media (un elemento intermedio o dos elementos intermedios divididos por dos) 
const middleIndex = Math.floor(ages.length / 2);
let median;
if (ages.length % 2 === 0) {
    median = (ages[middleIndex - 1] + ages[middleIndex]) / 2;
} else {
    median = ages[middleIndex];
}
console.log("La edad media es:", median);

// - Encuentre la edad promedio (todos los elementos divididos por el número de elementos)
let suma = 0;
for(let i = 0; i < ages.length; i++){ 
    suma+= ages[i];
}
let promedio = suma / ages.length;
console.log(`La edad promedio del arreglo es ${promedio}`);
// - Encuentre el rango de las edades (max menos min)
let range = Math.max(...ages) - Math.min(...ages);
console.log(`El rango entre la edad minima ${Math.min(...ages)} y la edad maxima ${Math.max(...ages)} es de ${range}`);
// - Compare el valor de (mín - promedio) y (máx - promedio), use el método _abs()_
let val1 = (Math.min(...ages) - promedio);
let val2 = (Math.max(...ages) - promedio);
console.log(Math.abs(val1) === Math.abs(val2));

// Cortar los 10 primeros paises del array paises
const countries2 = countries.slice(1,11);
console.log(countries2);

// Encuentre el país o países de en medio en el arreglo 
const middleCountryIndex = Math.floor(countries.length / 2);
let middleCountries;
if (countries.length % 2 === 0) {
    middleCountries = countries.slice(middleCountryIndex - 1, middleCountryIndex + 1);
} else {
    middleCountries = [countries[middleCountryIndex]];
}
console.log("El país o países de en medio son:", middleCountries);

//Divide el array de países en dos arrays iguales si es par. Si el array de países no es par, agregue un país más para la primera mitad 
let firstHalf, secondHalf;
if (countries.length % 2 === 0) {
    firstHalf = countries.slice(0, middleCountryIndex);
    secondHalf = countries.slice(middleCountryIndex);
} else {
    firstHalf = countries.slice(0, middleCountryIndex + 1);
    secondHalf = countries.slice(middleCountryIndex + 1);
}
console.log("Primera mitad:", firstHalf);
console.log("Segunda mitad:", secondHalf);