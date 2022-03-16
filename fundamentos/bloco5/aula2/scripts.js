// scripts

//1
let elemento = document.createElement('h1')
elemento.innerText = 'Exercício 5.2 - JavaScript DOM ';
document.body.appendChild(elemento)


//2
let main = document.createElement('main')
main.classList = 'main-content'
document.body.appendChild(main)

//3
let section = document.createElement('section')
section.classList = 'center-content'
main.appendChild(section)

//4
let p1 = document.createElement('p')
p1.innerText = 'Texto para o P aqui'
section.appendChild(p1)


//5
let sectionleft = document.createElement('section')
section.classList = 'left-content'
main.appendChild(sectionleft)

//6
let sectionright = document.createElement('section')
section.classList = 'right-content'
main.appendChild(sectionright)

//7
let image = document.createElement('img')
section.classList = 'small-image'
image.src = 'https://picsum.photos/200'
sectionleft.appendChild(image)
