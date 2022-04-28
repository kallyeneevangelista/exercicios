// 1. Acesse o elemento elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'yellow';
// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
// Você se lembra dos vídeos da aula anterior, como fazer isso?
const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'Este é meu primeiro teste de edição pelo DOM! Estou muito feliz de ter conseguido';
// 4. Acesse o primeiroFilho a partir de pai.
const primeiroFilho = pai.firstElementChild;
// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;
// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
const textElement = elementoOndeVoceEsta.nextSibling;
// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;
// 8. Agora acesse o terceiroFilho a partir de pai.
const terceiroFilho2 = pai.lastElementChild.previousElementSibling;