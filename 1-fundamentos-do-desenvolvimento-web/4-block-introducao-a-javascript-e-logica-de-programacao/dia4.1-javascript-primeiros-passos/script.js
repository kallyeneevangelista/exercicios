//1. 
const a = 25;
const b = 50;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);


//2. 
const primeira = 31;
const segunda = 54;

if (primeira > segunda) {
    console.log(`${primeira} é maior que ${segunda}`);
} else {
    console.log(`${segunda} é maior que ${primeira}`)
}


//3. 
const um = 31;
const dois = 54;
const tres = 41;

if (um > dois && um > tres) {
    console.log(um)
} else if (dois > um && dois > tres) {
    console.log(dois);
} else {
    console.log(tres);
}


//4. 
const constante = -15;

if (constante < 0) {
    console.log("negative");
} else if (constante === 0) {
    console.log("zero");
} else if (constante > 0){
    console.log("positive");
}


//5.
const angulo1 = 80;
const angulo2 = 70;
const angulo3 = 30;

if ((angulo1 + angulo2 + angulo3) === 180) {
    console.log("True");
}else{
    console.log("False");
}


//6.
let pecaDeXadrez = "Cavalo";
pecaDeXadrez = pecaDeXadrez.toLowerCase()

switch (pecaDeXadrez) {
    case "rainha":
        console.log("move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças");
        break;

    case "bispo":
        console.log("move-se ao longo da diagonal. Não pode pular outras peças");
        break;

    case "cavalo":
        console.log("única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa");
        break;

    case "torre":
        console.log("movimenta-se pela vertical ou horizontal, mas não pode pular outras peças");
        break;

    case "peão":
        console.log("movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo");
        break;

    default:
        console.log("Informe uma peça válida");
        break;
}


//7.
let nota = 75;

if (nota >= 90) {
    console.log("A");
}else if (nota < 90 && nota >= 80) {
    console.log("B");
}else if (nota < 90 && nota >= 70) {
    console.log("C");
}else if (nota < 70 && nota >= 60) {
    console.log("D");
}else if (nota < 60 && nota >= 50) {
    console.log("E");
}else {
    console.log("F");
}



//8.
const numero1 = 15;
const numero2 = 15;
const numero3 = 25;

if ((numero1 % 2 === 0)||(numero2 % 2 === 0)||(numero3 % 2 === 0)) {
    console.log("True");
}else {
    console.log("False");
}


//9.
const numero01 = 15;
const numero02 = 15;
const numero03 = 25;

if ((numero01 % 2 === 1)||(numero02 % 2 === 1)||(numero03 % 2 === 1)) {
    console.log("True");
}else {
    console.log("False");
}


//10.
const custo = 23.15;
const valorDeVenda = 55.84;
const imposto = (valorDeVenda * 20 / 100);

let lucro = (valorDeVenda - imposto - custo);
let unidadesVendidas = 1000;

console.log(`Valor de venda: R$${valorDeVenda}`);
console.log(`Imposto: R$${imposto}%`);
console.log(`Custo: R$${custo}`);
console.log(`Lucro por unidade R$${lucro}`);

console.log(`O lucro de ${unidadesVendidas} unidades vendidas é de R$${lucro * unidadesVendidas}`);




//11.
// Declaração de variáveis
let salarioBruto = 3000.00;
let descontoInss;
let salarioBase;
let parcelaADeduzir;
let impostoFinal;
let descontoIr;

//Desconto INSS
if (salarioBruto < 1556.94) {
    descontoInss = (salarioBruto * 8 / 100);
} else if (salarioBruto >= 1556.95 && salarioBruto < 2594.92) {
    descontoInss = (salarioBruto * 9 / 100);
} else if (salarioBruto >= 2594.93 && salarioBruto < 5189.82) {
    descontoInss = (salarioBruto * 11 / 100);
} else {
    descontoInss = 570.88
}

//Salário base
salarioBase = salarioBruto - descontoInss

//Desconto do IR
if (salarioBase < 1903.98) {
    descontoIr = 0;
} else if (salarioBase > 1903.98 && salarioBase < 2826.65) {
    descontoIr = salarioBase * 7.5 / 100;
} else if (salarioBase > 2826.65 && salarioBase < 3751.05) {
    descontoIr = salarioBase * 15 / 100;
} else if (salarioBase > 3751.05 && salarioBase < 4664,68) {
    descontoIr = salarioBase * 22.5 / 100;
} else if (salarioBase > 4664.68) {
    descontoIr = salarioBase * 27.5 / 100;
}

//Parcela a Deduzir
if (salarioBase < 1903.98) {
    parcelaADeduzir = 0;
} else if (salarioBase > 1903.98 && salarioBase < 2826.65) {
    parcelaADeduzir = 142.80;
} else if (salarioBase > 2826.65 && salarioBase < 3751.05) {
    parcelaADeduzir = 354,80;
} else if (salarioBase > 3751.05 && salarioBase < 4664,68) {
    parcelaADeduzir = 636,13;
} else if (salarioBase > 4664.68) {
    parcelaADeduzir = 869.36;
}

//Imposto final
impostoFinal = descontoIr - parcelaADeduzir

//Resultado do salário
let resultadoFinal = salarioBase - impostoFinal

//Impressão na tela
console.log(salarioBruto);
console.log(descontoInss);
console.log(salarioBase);
console.log(parcelaADeduzir);
console.log(impostoFinal);
console.log(descontoIr);
console.log(resultadoFinal);