/* 1. O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:*/
let numero = 5;
let resultado = numero;

/* Passo a passo:
1. pegar o numero
2. desmembrar até o número 1
3. multiplicar um a um
4. guardar o resultado
5, consolar */

for (let index = numero; index > 1; index -=1) {
    resultado = resultado * (index-1)
    console.log(resultado)
}

/* 2. Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.*/
let palavra = "banana";
let novaPalavra;
let palavraFinal;
let palavraInvertida;

/* Passo a passo:
1. separar cada letra
2. guardar essa nova string
3. inverter a ordem de forma dinâmica
4. guardar a string final (concatenar)*/

for (let index = 0; index <= palavra.length; index += 1) {
    novaPalavra = palavra
    console.log(novaPalavra)
}


/* [Bônus] Bubble sort */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/* Crescente */
for (let index = 0; index < numbers.length; index += 1) {
    for (let indexTwo = 0; indexTwo < index; indexTwo += 1) {
        if (numbers[index] < numbers[indexTwo]) {
            let finalPosition = numbers[index];
            numbers[index] = numbers[indexTwo];
            numbers[indexTwo] = finalPosition;
        }
    }
}
console.log(numbers);

/* Decrescente */
for (let index = 0; index < numbers.length; index += 1) {
    for (let indexTwo = 0; indexTwo < index; indexTwo += 1) {
        if (numbers[index] > numbers[indexTwo]) {
            let finalPosition = numbers[index];
            numbers[index] = numbers[indexTwo];
            numbers[indexTwo] = finalPosition;
        }
    }
}
console.log(numbers);

/* Atividade realizada em 28/04/2022 com ajuda do Bruno Feu. */
