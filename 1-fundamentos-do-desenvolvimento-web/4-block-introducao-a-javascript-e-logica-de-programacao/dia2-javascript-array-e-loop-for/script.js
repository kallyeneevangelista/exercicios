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
}
 */



//For/of
//Exercício 1:
/* let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (name of names) {
    console.log(name)
}
 */





//Exercícios de aprofundamento
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1.
for (index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index])
}


//2.
for (index = 0; index < numbers.length; index += 1) {
    let soma = numbers[index] + numbers[index];
    console.log(soma);
}