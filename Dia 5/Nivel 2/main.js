import {webTechs} from './web_techs.js';
import {countries} from './countries.js';

console.log(webTechs);
console.log(countries);
console.log("--------------------");
// Primero elimine todos los signos de puntuación y cambie de string a array y cuente el número de palabras en el array
let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let words = text.replace(/[^\w\s]/g, '').split(' ');
console.log(words);
console.log(words.length);
console.log("--------------------");

// En el siguiente carrito de compras agregue, elimine, edite artículos
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
console.log("--------------------");

// Agregue 'Meat' al comienzo de su carrito de compras si aún no se ha agregado
if(!shoppingCart.includes("Meat")){
    shoppingCart.unshift("Meat");
    console.log("Se acaba de agregar Meat al inicio del carrito de compras");
    console.log(shoppingCart);
}
console.log("--------------------");

// Agregue 'Sugar' al final de su carrito de compras si aún no se ha agregado 
if(!shoppingCart.includes("Sugar")){
    shoppingCart.push("Sugar");
    console.log("Se acaba de agregar Sugar al final del carrito de compras");
    console.log(shoppingCart);
}
console.log("--------------------");

// Elimine 'Honey' si es alérgico a la miel (honey)
let alergico = prompt("¿Eres alergico a la miel?");
if (alergico.toLowerCase() === 'si') {
    const honeyIndex = shoppingCart.indexOf("Honey");
    if (honeyIndex !== -1) {
        shoppingCart.splice(honeyIndex, 1);
        console.log("Se ha eliminado Honey del carrito de cosimpras porque eres alérgico.");
        console.log(shoppingCart);
    }
}console.log("--------------------");

// Modificar Tea a 'Green Tea'
let modifyTea = shoppingCart.indexOf("Tea");
shoppingCart[modifyTea] = "Green Tea";
console.log(shoppingCart);
console.log("--------------------");

// En el array de países, verifique si 'Ethiopia' existe en el array si existe, imprima 'ETHIOPIA'. Si no existe agregar a la lista de países.
if(countries.includes("Ethiopia")){
    console.log("ETHIOPIA");
}else{
    countries.push("Ethiopia");
    console.log("Se agrego Ethiopia al arreglo de paises");
}
console.log("--------------------");

// En el array webTechs, verifique si Sass existe en el array y si existe, imprima 'Sass es un preproceso de CSS'. Si no existe, agregue Sass al array e imprima el array.
if(webTechs.includes("Sass")){
    console.log("Sass es un preproceso de CSS");
}else{
    webTechs.push("Sass")
    console.log("Se agrego Sass a la lista");
    console.log(webTechs);
}

// Concatene las siguientes dos variables y guardelas en una variable fullStack.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);