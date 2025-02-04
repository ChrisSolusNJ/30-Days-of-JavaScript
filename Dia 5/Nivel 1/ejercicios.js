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

// 1. Declara un array vacío.
const myArry1 = [];

// Declara un array con mas de 5 elementos.
const myArry2 = ["Chris", "Programador", "Videojuegos", 28, 5];

// Encuentra la longitud de tu array.
console.log("La longitud de mi array es de " +myArry2.length+ " elementos");
console.log("-------------");
// Obtenga el primer elemento, el elemento del medio y el último elemento de un array.
const firstElement = myArry2[0];
const middleElement = myArry2[Math.floor(myArry2.length / 2)];
const lastElement = myArry2[myArry2.length - 1];

console.log("Primer elemento:", firstElement);
console.log("Elemento del medio:", middleElement);
console.log("Último elemento:", lastElement);
console.log("-------------");

// Declara un array llamado mixedDataTypes, coloque diferentes tipos de datos en el array y encuentre la longitud del array. El tamaño del array debe ser mayor que 5.

const mixedDataTypes = ["Jess", "Chris", 27, 28, "musica", "videojueos","conciertos", 2010, "amigos", 2025, "novios"];
console.log("La longitud del array mixedDataTypes es de " +mixedDataTypes.length+ " elementos");
console.log("-------------");

// Declare un variable array de nombre itCompanies y asignarles valores iniciales Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon.
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Amazon"];

// Imprima el array usando console.log().
console.log(itCompanies);
console.log("-------------");

// Imprima el número de empresas en el array.
console.log("Este array tiene un total de " +itCompanies.length+" empresas dentro de el.");
console.log("-------------");

// Imprime la primer empresa , la intermedia y la última empresa
const primeraEmpresa = itCompanies[0];
const intermedia = itCompanies[Math.floor(itCompanies.length / 2)];
const ultimaEmpresa = itCompanies[itCompanies.length-1];
console.log("Primera empresa:", primeraEmpresa);
console.log("Empresa de en medio:", intermedia);
console.log("Ultima empresa:", ultimaEmpresa);
console.log("-------------");

// Imprime cada empresa.
for (const company of itCompanies) {
    console.log(company);
  }
console.log("-------------");

// Cambie el nombre de cada empresa a mayúsculas uno por uno e imprímalos.
for(company of itCompanies){
    console.log(company.toUpperCase());
}
console.log("-------------");

// Imprime el array como una oración: Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon son grandes empresas de TI.
console.log(`${itCompanies.slice(0,-1).join(", ")} y ${itCompanies[itCompanies.length-1]} son grandes empresas de TI`);
console.log("-------------");

// Compruebe si existe una determinada empresa en el array itCompanies. Si existe, retorna la empresa; de lo contrario, retorna la empresa no existe
let companyToCheck = "Amazon";
itCompanies.includes(companyToCheck) ? console.log(`${companyToCheck} si existe en el arreglo`) : console.log(`${companyToCheck} no existe en el arreglo`);
console.log("-------------");

// Filtre las empresas que tienen más de una 'o' sin el método filter()
const companieWithTwoOs = [];
for(const company of itCompanies){
  let contador = 0;
  for(let char of company.toLowerCase()){
    if(char === "o"){
      contador++;
    }
  }
  if(contador > 1){
    companieWithTwoOs.push(company)
  }
}

console.log(companieWithTwoOs);
console.log("-------------");

// Ordene el array usando el método sort()
console.log(itCompanies.sort());
console.log("-------------");

// Invierte la array usando el método reverse()
console.log(itCompanies.reverse());
console.log("-------------");

// Cortar las primeras 3 empresas del array
const itCompanies2 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Amazon"];
console.log(itCompanies2.slice(0,3));
console.log("-------------");

// Cortar las últimas 3 empresas del array
console.log(itCompanies2.slice(3,6));
console.log("-------------");
// Cortar la empresa o empresas intermedias de TI del array
console.log(itCompanies2.slice(2,4));
console.log("-------------");

// Eliminar la primera empresa de TI del array
itCompanies2.shift();
console.log(itCompanies2);
console.log("-------------");

// Eliminar la empresa o empresas intermedias de TI del array
itCompanies2.splice(Math.floor(itCompanies2.length / 2), 1);
console.log(itCompanies2);
console.log("-------------");

// Elimine la última empresa de TI del array
itCompanies2.pop();
console.log(itCompanies2);
console.log("-------------");

// Eliminar todas las empresas de TI
itCompanies2.length = 0;
console.log(itCompanies2);
console.log("-------------");
