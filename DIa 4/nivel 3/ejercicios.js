// Escribe un programa que diga el número de días en un mes.
let mes = prompt("Introduce un mes");
let year = prompt("Introduce un año");
let days;

if (mes.toLowerCase() === "febrero") {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        days = 29;
    } else {
        days = 28;
    }
} else if (
    mes.toLowerCase() === "abril" ||
    mes.toLowerCase() === "junio" ||
    mes.toLowerCase() === "septiembre" ||
    mes.toLowerCase() === "noviembre"
) {
    days = 30;
} else {
    days = 31;
}

console.log(`El mes de ${mes} en el año ${year} tiene ${days} días.`);