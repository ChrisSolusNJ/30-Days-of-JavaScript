// 1. Escriba un código que pueda calificar a los estudiantes de acuerdo con sus puntajes:

// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let calificacion = prompt("Introduce la calificacion del estudiante");
calificacion = parseInt(calificacion);

if (calificacion >= 80 && calificacion <= 100) {
    console.log('A');
} else if (calificacion >= 70 && calificacion <= 79) {
    console.log('B');
} else if (calificacion >= 60 && calificacion <= 69) {
    console.log('C');
} else if (calificacion >= 50 && calificacion <= 59) {
    console.log('D');
} else if (calificacion >= 0 && calificacion <= 49) {
    console.log('F');
} else {
    console.log('Calificación no válida');
}

// 2. Consulta si la temporada es Otoño, Invierno, Primavera o Verano. Si la entrada del usuario es :

// Septiembre, Octubre o Noviembre, la temporada es Otoño.
// Diciembre, Enero o Febrero, la temporada es Invierno.
// Marzo, Abril o Mayo, la temporada es Primavera
// Junio, Julio o Agosto, la temporada es Verano

let temporada = prompt("Introduce el mes en el que estamos");

switch (temporada.toLowerCase()) {
    case 'septiembre':
    case 'octubre':
    case 'noviembre':
        console.log('Otoño');
        break;
    case 'diciembre':
    case 'enero':
    case 'febrero':
        console.log('Invierno');
        break;
    case 'marzo':
    case 'abril':
    case 'mayo':
        console.log('Primavera');
        break;
    case 'junio':
    case 'julio':
    case 'agosto':
        console.log('Verano');
        break;
    default:
        console.log('Mes no válido');
}

// 3. Compruebe si un día es un día de fin de semana o un día laborable. Su script tomará el día como entrada.

let dia = prompt("¿Qué día es hoy?").toLowerCase();

if (dia === 'sábado' || dia === 'domingo') {
    console.log('Fin de semana');
} else if (dia === 'lunes' || dia === 'martes' || dia === 'miércoles' || dia === 'jueves' || dia === 'viernes') {
    console.log('Día laborable');
} else {
    console.log('Día no válido');
}