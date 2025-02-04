import {countries} from './countries.js'


// Copia el array countries (Evita mutaciones)
const countries2 = [];
countries2.push(countries)
console.log(countries2);
console.log("---------");

//Los arrays son mutables. Crea una copia del array que no modifique el original. Ordena la copia del array y guárdala en una variable sortedCountries 
const sortedCountries = [];
sortedCountries.push(countries);
sortedCountries.sort();
console.log(sortedCountries);
console.log("---------");

// Ordena el array webTechs y el array mernStack
const webTechs = ["HTML","CSS","JavaScript","React","Redux","Node","MongoDB"];
const mernStack = ["MongoDB", "Express", "React", "Node"];
console.log(webTechs.sort());
console.log(mernStack.sort());
console.log("---------");

//Extrae todos los países que contengan la palabra 'land' del array countries e imprimela como un array
const countriesWithLand = [];
for(let i = 0; i < countries.length; i++){
    if(countries[i].includes("land")){
        countriesWithLand.push(countries[i]);
    }
}
console.log(countriesWithLand);
console.log("---------");

// Encuentra el país que contiene la mayor cantidad de caracteres en el array countries
let longestCountry = '';
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length > longestCountry.length) {
        longestCountry = countries[i];
    }
}
console.log(longestCountry);
console.log("---------");

//Extrae todos los países que contengan solo cuatro caracters del array countries e impremela como un array

const countriesWithFourCharacters = [];

for(let i = 0; i < countries.length; i++){
    if(countries[i].length === 4){
        countriesWithFourCharacters.push(countries[i]);
    }
}

console.log(countriesWithFourCharacters);
console.log("---------");

// Extrae todos los paíse que contengan dos o más palabras del array countries e imprimela como un array 

const countriesWithTwoWords = [];

for(let i = 0; i < countries.length; i++){
    if(countries[i].split(" ").length >= 2){
        countriesWithTwoWords.push(countries[i]);
    }
} 

console.log(countriesWithTwoWords);
console.log("---------");

// Invertir el array countries y poner en mayúscula cada país y almacenalo en un array

const countriesReverse = [];
for(let i = countries.length; i > 0; i--){
    countriesReverse.push(countries.pop().toUpperCase());
 }

 console.log(countriesReverse);