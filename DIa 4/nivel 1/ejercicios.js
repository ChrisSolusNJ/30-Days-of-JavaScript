// Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). Si el usuario tiene 18 años o más, muestre el mensaje: 'Tiene la edad suficiente para conducir', pero si no tiene 18 años, brinde otro mensaje que indique que debe esperar la cantidad de años que necesita para cumplir 18.

let edad = prompt("Introduce tu edad");
if(edad >= 18 ){
    console.log("Tiene la edad suficiente para conducir");
}else{
    console.log("Te faltan " +(18-edad)+ " para conducir.");
}

// Compara los valores de myAge y yourAge usando if... else. Según la comparación, registre el resultado en la consola indicando quién es mayor (tú o yo). Utilice prompt(“Ingrese su edad:”) para obtener la edad como entrada.
 let myAge = 28;
 let yourAge = prompt("Ingrese su edad:");
 myAge > yourAge ? console.log("Yo soy mayor que tú") 
 : console.log("Tu eres nayor que yo");

//  Si a es mayor que b, devuelve 'a es mayor que b'; de lo contrario, 'a es menor que b'. Trate de implementarlo de maneras diferentes

// Usando if else
// operador ternario.

let a = prompt("Introduce el valor de a");
let b = prompt("Introduce el valor de b");

if(a < b){
    console.log("a es menor que b");
}else{
    console.log("a es mayor que b");
}

a < b ? console.log("a es menor que b") : console.log("a es mayor que b");

// Los números pares son divisibles por 2 y el resto es cero. ¿Cómo verificar si un número es par o no usando JavaScript?
let number = prompt("Introduce el valor de un numero")
if(a % 2 === 0  ){
    console.log(number + " es un numero par");
}else{
    console.log(number + " es un numero impar");
}