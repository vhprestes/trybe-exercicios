// scripts

//1
let elemento = document.createElement("h1");
elemento.innerText = "Exercício 5.2 - JavaScript DOM ";
document.body.appendChild(elemento);

//2
let main1 = document.createElement("main");
main1.classList = "main-content";
document.body.appendChild(main1);

//3
let section1 = document.createElement("section");
section1.classList = "center-content";
main1.appendChild(section1);

//4
let p1 = document.createElement("p");
p1.innerText = "DEU CERTO PQ A LORENA ENSINOU";
section1.appendChild(p1);

//5
let sectionleft = document.createElement("section");
sectionleft.classList = "left-content";
main1.appendChild(sectionleft);

//6
let sectionright = document.createElement("section");
sectionright.classList = "right-content";
main1.appendChild(sectionright);

//7
let image = document.createElement("img");
image.classList = "small-image";
image.src = "https://picsum.photos/200";
sectionleft.appendChild(image);

//8
let lista = document.createElement("ul");
let numeros = [
  "um",
  "dois",
  "três",
  "quatro",
  "cinco",
  "seis",
  "sete",
  "oito",
  "nove",
  "dez",
];

for (let index in numeros) {
  let itensLista = document.createElement("li");
  itensLista.innerText = numeros[index];
  lista.appendChild(itensLista);
}

sectionright.appendChild(lista);

//9
function createElement(titulos) {
  let tituloh3 = document.createElement("h3");
  tituloh3.classList = "titulos";
  return tituloh3;
}
  
main1.appendChild(createElement("h31"));
main1.appendChild(createElement("h32"));
main1.appendChild(createElement("h33"));


