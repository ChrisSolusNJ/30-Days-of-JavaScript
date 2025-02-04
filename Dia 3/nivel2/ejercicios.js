// Cree un formato de hora legible por humanos usando el objeto Date.
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm

let now = new Date();

// Obtener las partes necesarias de la fecha
let year = now.getFullYear();
let month = String(now.getMonth() + 1).padStart(2, "0"); // Mes (0-11, por eso sumamos 1)
let day = String(now.getDate()).padStart(2, "0"); // Día del mes
let hours = String(now.getHours()).padStart(2, "0"); // Hora
let minutes = String(now.getMinutes()).padStart(2, "0"); // Minutos

// Formatos legibles por humanos
let format1 = `${year}-${month}-${day} ${hours}:${minutes}`; // YYYY-MM-DD HH:mm
let format2 = `${day}-${month}-${year} ${hours}:${minutes}`; // DD-MM-YYYY HH:mm
let format3 = `${day}/${month}/${year} ${hours}:${minutes}`; // DD/MM/YYYY HH:mm

// Mostrar los resultados
console.log(format1); // Ejemplo: 2025-01-28 14:45
console.log(format2); // Ejemplo: 28-01-2025 14:45
console.log(format3); // Ejemplo: 28/01/2025 14:45
