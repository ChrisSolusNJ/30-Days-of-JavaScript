// Cree un formato de hora legible por humanos usando el objeto Date. La hora y el minuto deben ser siempre dos dígitos (7 horas deben ser 07 y 5 minutos deben ser 05)
// YYY-MM-DD HH:mm eg. 2020-01-02 07:05

let now = new Date();

// Obtener las partes de la fecha y la hora
let year = now.getFullYear();
let month = String(now.getMonth() + 1).padStart(2, "0"); // Mes (0-11, por eso +1)
let day = String(now.getDate()).padStart(2, "0");        // Día del mes
let hours = String(now.getHours()).padStart(2, "0");     // Hora (dos dígitos)
let minutes = String(now.getMinutes()).padStart(2, "0"); // Minutos (dos dígitos)

// Crear el formato YYYY-MM-DD HH:mm
let formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;

console.log(formattedDate);
