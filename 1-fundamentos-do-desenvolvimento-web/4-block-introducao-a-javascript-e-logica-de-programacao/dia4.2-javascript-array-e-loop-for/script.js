/* Refazendo so exercícios em 23/04/2022 (sábado): */

/* Atividade no forms refeita com 100% de aproveitamento:
https://be-trybe.typeform.com/to/nVivcI32 */

/* Aprofunde seus conhecimentos
Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:
Copiar
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1
for (let number of numbers) {
    console.log(number);
}

//2
let result = 0;
for (let number of numbers) {
    result = result + number;
}
console.log(result);

//3
let soma = 0;
for (let number of numbers) {
    soma = (soma + number);
}
let media = soma / numbers.length;
console.log(media);

//4 
if (media > 20) {
    console.log(`Valor maior que 20.`);
} else {
    console.log(`Valor menor que 20.`)
}

//5
let resultadoMaior = numbers[0];
for (let number of numbers) {
    if (number > resultadoMaior) {
        resultadoMaior = number;
    }
}
console.log(resultadoMaior);

//6
let resultadoImpar = 0;
for (number of numbers) {
    if (number % 2 !== 0) {
        resultadoImpar += 1;
    }
}

if (resultadoImpar === 0) {
    console.log(`Nenhum valor ímpar encontrado.`);
} else {
    console.log(resultadoImpar);
}

//7
let menorValor = numbers[0];
for (number of numbers) {
    if (number < menorValor) {
        menorValor = number
    }
}
console.log(menorValor);

//8
let array = [];
for (let index = 1; index <= 25; index += 1) {
    array.push(index);
}
console.log(array);

//9
let resultadoDivisao = [];
for (numero of array) {
    resultadoDivisao.push(numero / 2);
}
console.log(resultadoDivisao);


/* ================================================ */

/* Exercícios feitos no dia da aula */
/* let tarefas = ["Assistir aulas da trybe", "Completar o projeto", "Estudar CSS", "Pular corda", "Preparar roteiro para happy hour", "Mandar violão para o conserto"];
tarefas.unshift("Tirar a música Unbreak My Heart no violão");
tarefas.push("Descansar");
console.log(tarefas);
tarefas.pop();
console.log(tarefas);
tarefas.shift();
console.log(tarefas);
 */

/* //Exercício 1:
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
console.log(menuServices);

//Exercício 2:
let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu2.indexOf("Portfólio");
console.log(indexOfPortfolio);

//Exercício 3:
let menu3 = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu3.push("Contato")
console.log(menu3);
 */

//Laço for
//Exercício 1:
/* let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]);
}*/

//For/of
//Exercício 1:
/* let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (name of names) {
    console.log(name)
}*/

//Exercícios de aprofundamento
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; */

//1.
/* for (index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index])
}*/

//2.
//
/* let soma = 0;
for (index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}
console.log(soma); */