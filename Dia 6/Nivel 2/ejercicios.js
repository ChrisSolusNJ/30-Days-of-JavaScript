import {countries} from './countries.js'
import {webTechs} from './web_techs.js';

//Desarrolla un pequeño script que genera un id con cualquier número de caracteres aleatorios

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let length = Math.floor(Math.random() * 100);

let result = '';
for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
 }
    
console.log(result);
console.log("---------");

// Escribe un script que genere un número hexadecimal aleatorio.
let hex = "#";
for(let i = 0; i < 6; i++){
    let digito = Math.floor(Math.random() * 16).toString(16);
    hex +=digito;
}   

console.log(hex);
console.log("---------");

// Escribe un script que genere un número de color rgb aleatorio.
let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);
console.log(`rgb(${r}, ${g}, ${b})`);
console.log("---------");

// Usando el array countries anterior, crea un array como el siguiente.
//["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
const upperCaseCountries = countries.map(country => country.toUpperCase());
console.log(upperCaseCountries);
console.log("---------");

// Usando el array countries anterior, crea un array para saber la longitud de cada país.
const countriesSize = [];
for(let i = 0; i < countries.length; i++){
    countriesSize.push(countries[i].length);
}
console.log(countriesSize);
console.log("---------");

// Utiliza el array countries para crear la siguiente array de arrays
// [
//     ['Albania', 'ALB', 7],
//     ['Bolivia', 'BOL', 7],
//     ['Canada', 'CAN', 6],
//     ['Denmark', 'DEN', 7],
//     ['Ethiopia', 'ETH', 8],
//     ['Finland', 'FIN', 7],
//     ['Germany', 'GER', 7],
//     ['Hungary', 'HUN', 7],
//     ['Ireland', 'IRE', 7],
//     ['Iceland', 'ICE', 7],
//     ['Japan', 'JAP', 5],
//     ['Kenya', 'KEN', 5]
//   ]

let countries2 = [];
for(let i = 0; i < countries.length; i++){
    countries2.push(`['${countries[i]}', '${countries[i].slice(0,3)}', '${countries[i].length}']`)
}
console.log(countries2);
console.log("---------");

// En el array countries anterior, verifica si hay un país que contenga la palabra 'land'. Si hay países que contienen 'land', imprimelo cono array. Si no hay ningún país que contenga la palabra'land', imprima 'Todos estos países no tienen la palabra land'. 
const countriesWithLand = [];
for(let i = 0; i < countries.length; i++){
    if(countries[i].includes("land")){
        countriesWithLand.push(countries[i]);
    }    

}
if(countriesWithLand.length > 0){
    console.log(countriesWithLand);
}else{
    console.log("Todos estos países no tienen la palabra land");
}
console.log("---------");

// En el array countries anterior, verifica si hay un país que termina con una subcadena (substring) 'ia'. Si hay países que terminan con 'ia', imprimelo como un array. Si no hay ningún país que contenga la palabra 'ia', imprime 'Estos países no terminan con ia'.
const countriesWithia = [];
for(let i = 0; i < countries.length; i++){
    if(countries[i].endsWith("ia")){
        countriesWithia.push(countries[i]);
    }    

}
if(countriesWithia.length > 0){
    console.log(countriesWithia);
}else{
    console.log("Estos países no terminan con ia'");
}
console.log("---------");

//  Usando el array countries anterior, encuentre el país que contiene la mayor cantidad de caracteres. 
let longestCountry = '';
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length > longestCountry.length) {
        longestCountry = countries[i];
    }
}
console.log(longestCountry);
console.log("---------");

//Usando el array countries anterior, encuentre el país que contiene sólo 5 caracteres
const countriesWithFiveCharacteres = [];
for (let i = 0; i < countries.length; i++) {
    if(countries[i].length === 5){
        countriesWithFiveCharacteres.push(countries[i]);
    }
}

console.log(countriesWithFiveCharacteres);
console.log("---------");

//Encuentra la palabra más larga en el array webTechs
let longestWebTechs = "";
for(let i = 0; i < webTechs.length; i++){
    if(webTechs[i].length > longestWebTechs.length){
        longestWebTechs = webTechs[i];
    }
}
console.log(longestWebTechs);
console.log("---------");

// Utiliza el array de webTechs para crear la el siguiente array de arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

let webtech2 = [];
for(let i = 0; i < webTechs.length; i++){
    webtech2.push(`[${webTechs[i]}, ${webTechs[i].length}]`);
}
console.log(webtech2);
console.log("---------");

//Una aplicación creada con MongoDB, Express, React y Node se denomina MERN stack app. Crea el acrónimo MERN usando el array mernStack
const mernStack = ["MongoDB", "Express", "React", "Node"];
let stack = "";
for(let i = 0; i < mernStack.length; i++){
    stack += mernStack[i].slice(0,1);
}
console.log(stack);
console.log("---------");

// Iterar a través del array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] usando el bucle for o el bucle for of e imprime los elementos.

const webTechs3 = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];

for(const web of webTechs3){
    console.log(web);
}
console.log("---------");

//Este es un array de frutas, ['banana', 'orange', 'mango', 'lemon'] invierte el orden usando un bucle sin usar el método reverse().

const fruits = ['banana', 'orange', 'mango', 'lemon'] ;
const fruits2 = [];
for(let i = fruits.length; i > 0; i--){
   fruits2.push(fruits.pop());
}
console.log(fruits2);

// Imprime todos los elementos del array como se muestra a continuación:
// const fullStack = [
//   ["HTML", "CSS", "JS", "React"],
//   ["Node", "Express", "MongoDB"],
// ];
// HTML
// CSS
// JS
// REACT
// NODE
// EXPRESS
// MONGODB

const fullStack = [
    ["HTML", "CSS", "JS", "React"],
    ["Node", "Express", "MongoDB"],
];

for(let i = 0; i < fullStack.length; i++){
    for(let j = 0; j < fullStack[i].length; j++){
        console.log(`${fullStack[i][j]}`);
    }
}