const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
];
  
  const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
];
  
const mernStack = ["MongoDB", "Express", "React", "Node"];

// Itera de 0 a 10 usando el bucle for, haga lo mismo usando los bucles while y do while
for(let i = 0; i<= 10; i++){
    console.log(i);
}
console.log("------------");

let a = 0;
while (a <= 10) {
  console.log(a);
  a++;
}
console.log("------------");

let b = 0
do{
    console.log(b);
    b++;
}while(b <=10)
console.log("------------");

// Itera 10 to 0 usando el bucle for, haga lo mismo usando los bucles while y do while
for(let i = 10; i >= 0; i--){
    console.log(i);
}
console.log("------------");

let x = 10;
while (x >= 0) {
  console.log(x);
  x--;
}
console.log("------------");

let y = 10
do{
    console.log(y);
    y--;
}while(y >= 0)
 console.log("------------");

// Itera de 0 a n usando el bucle for
let n = 8;
for(let i = 0; i <= n; i++){
    console.log(i);
}
console.log("------------");


// Escribe un bucle que haga el siguiente patrón usando console.log():

// #
// ##
// ###
// ####
// #####
// ######
// #######

const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i + 1))
}
  
let result = "";

for (const row of rows) {
    result = result + row + "\n";
}
  
console.log(result);
console.log("------------");
// Usa un bucle para imprimir el siguiente patrón:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

for(let i = 0; i <= 10; i++){
    console.log(`${i} x ${i} = ${i*i}`);
}
console.log("------------");

// Usando un bucle imprime el siguiente patrón:
// i    i^2   i^3
// 0    0     0
// 1    1     1
// 2    4     8
// 3    9     27
// 4    16    64
// 5    25    125
// 6    36    216
// 7    49    343
// 8    64    512
// 9    81    729
// 10   100   1000
console.log(`i   i^2  i^3`);
for(let i = 0; i <= 10; i++){
    console.log(`${i}   ${Math.pow(i,2)}   ${Math.pow(i,3)}`);
}
console.log("------------");

// Usa el bucle for para iterar de 0 a 100 e imprima solo números pares
for(let i = 0; i <= 100; i++){
    if( i%2 === 0){
        console.log(i);
    }
}
console.log("------------");

// Usa el bucle for para iterar de 0 a 100 e imprima solo números impares
for(let i = 0; i <= 100; i++){
    if( i%2 !== 0){
        console.log(i);
    }
}
console.log("------------");

// Usa el bucle for para iterar de 0 a 100 e imprima los solo números primos
for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i);
    }
}
console.log("------------");

// Usa el bucle for para iterar de 0 a 100 e imprima la suma de todos los números.
let suma = 0;
for(let i = 0; i <= 100; i++){
    suma +=i;
}
console.log(`El resultado de la suma de 0 a 100 es ${suma}`);

console.log("--------------");

//Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares.
let sumaPar = 0;
let sumaImpar = 0;

for(let i = 0; i <= 100; i++){
    i % 2 === 0 ? sumaPar += i : sumaImpar +=i;
}
console.log(`La suma de todos los pares de 0 a 100 es ${sumaPar}. Y la suma de todos los impares de 0 a 100 es ${sumaImpar}.`);
console.log("--------------");

//Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares. Imprimir suma de pares y suma de impares como un array

console.log(`[${sumaPar}, ${sumaImpar}]`);

// Desarrolla un pequeño script que genera una matriz de 5 números aleatorios 
let matriz = [];

for(let i = 0; i < 6; i++){
    matriz[i] = Math.floor(Math.random() * 100);
}

console.log(matriz);

console.log("---------");

// Desarrolla un pequeño script que genere una matriz de 5 números aleatorios. Los números deben de ser únicos
let matriz2 = [];
let numerosGenerados = new Set();

while (numerosGenerados.size < 5) {
    let numeroAleatorio = Math.floor(Math.random() * 100); // Números entre 0 y 99
    if (!numerosGenerados.has(numeroAleatorio)) {
        numerosGenerados.add(numeroAleatorio);
        matriz2.push(numeroAleatorio);
    }
}

console.log(matriz2);
console.log("---------");

// Desarrolla un pequeño script que genera un id aleatorio de seis caracteres:
let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let id = "";
    
for (let i = 0; i < 6; i++) {
    let indice = Math.floor(Math.random() * caracteres.length);
    id += caracteres[indice];
}

console.log(id);