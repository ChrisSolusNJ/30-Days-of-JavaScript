// Ejercicios de Nivel 1

// 1. Declare las siguientes variables; firstName, lastName, country, city, age, isMarried, year y asignar un valor, use el operador typeof para verificar diferentes tipos de datos.

let firstName = "Christian";
let lastName = "Navarro";
let country = "México";
let city = "Huehuetoca";
let age = 29;
let isMarried = false;
let year = 2025;

console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));

console.log("----------------------");

// 2. Verifique si typeof '10' es igual a 10

console.log(typeof('10') === 10);
console.log("----------------------");
// 3. Verifique si parseInt('9.8') es igual a 10

console.log(parseInt('9.8') === 10);
console.log("----------------------");
// 4. Verifique cualquier valor booleano true o false.
// i. Escriba tres declaraciones de JavaScript que proporcionen un valor verdadero.
// ii. Escriba tres declaraciones de JavaScript que proporcionen un valor falso.
console.log(4===4);
console.log(typeof("Jess") === typeof("Chris"));
console.log(5=='5');
console.log(typeof("Mexico") === typeof(Mexico));
console.log(2<-2);
console.log("Hola" === "Hi");
console.log("----------------------");
// 5. Calcule primero el resultado de la siguiente expresión de comparación sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()
// 4 > 3
// 4 >= 3
// 4 < 3
// 4 <= 3
// 4 == 4
// 4 === 4
// 4 != 4
// 4 !== 4
// 4 != '4'
// 4 == '4'
// 4 === '4'

console.log(4>3);
console.log(4>=3);
console.log(4<3);
console.log(4<=3);
console.log(4==4);
console.log(4===4);
console.log(4!=4);
console.log(4!==4);
console.log(4=='4');
console.log(4===4);
console.log("----------------------");

// 6. Encuentre la longitud de Python y jargon y haga una declaración de comparación falsa.
// Calcule primero el resultado de las siguientes expresiones sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()
// 4 > 3 && 10 < 12
// 4 > 3 && 10 > 12
// 4 > 3 || 10 < 12
// 4 > 3 || 10 > 12
// !(4 > 3)
// !(4 < 3)
// !(false)
// !(4 > 3 && 10 < 12)
// !(4 > 3 && 10 > 12)
// !(4 === '4')
// No hay 'on' tanto en dragon como en python
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log("dragon".includes("on") === "phyton".includes("on"));
console.log("----------------------");

// 7. Utilice el objeto Date para realizar las siguientes actividades
// ¿Qué año es hoy?
// ¿Qué mes es hoy con un número?
// ¿Qué fecha es hoy?
// ¿Qué día es hoy con un número?
// ¿Cuál es la hora actual?
// ¿Cuántos minutos hay actualmente?
// Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.
const now = new Date();
console.log(now.getFullYear())
console.log(now.getMonth()+1);
console.log(now);
console.log(now.getDate());
console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
console.log(now.getMinutes());
console.log(now.getTime());