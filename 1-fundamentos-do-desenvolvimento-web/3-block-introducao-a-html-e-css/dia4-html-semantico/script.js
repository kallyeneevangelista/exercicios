/* let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientInfo);
 */


/* const base = 5;
let height = 8;
const area = base * height;
const perimeter = base + base + height + height;

console.log(area);
console.log(perimeter);
 */


/* 
const nota = 1;

if (nota >= 80) {
    console.log("Parabéns, você foi aprovado(a)!")
} else if (nota < 80 && nota >= 60) {
    console.log("Você está na nossa lista de espera")
} else {
    console.log("Você foi reprovado(a)")
} */


/* const currentHour = 13;
let message;

if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir"
} else if (currentHour >=18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D"
} else if (currentHour >=14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?"
} else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do Almoço!!!"
} else if (currentHour >= 4 && currentHour < 11) {
    message = "Hum, cheiro de café recém passado"
}

console.log(message) */


let teste = "aprovada";

switch (teste) {
    case "aprovada":
        console.log("Parabéns, você foi aprovado(a)");
    break;

    case "reprovada":
        console.log("Que pena, não foi dessa vez. Tente novamente!");
    break;

    default:
        console.log("Verifique sua situação junto da administração")
    break;
}