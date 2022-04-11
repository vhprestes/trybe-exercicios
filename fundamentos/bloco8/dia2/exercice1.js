const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

//   function authorBornIn1947() {
//     return books.find((book) => book.author.birthYear === 1947).author.name;
// }

 
function smallerName() {
    let nameBook;
    books.forEach((book) => {
     if (!nameBook || book.name.length < nameBook.length) {
         nameBook = book.name;
     }
         })
         return nameBook;
        }

// function smallerName() {
//     let nameBook;
//     books.forEach((livro) => {
//       if (livro.name.length < nameBook.length) {
//         nameBook = livro.name;
//       }
//     });
//    return nameBook;
//   }


  // const expectedResult = {
  //   author: {
  //     birthYear: 1948,
  //     name: 'George R. R. Martin',
  //   },
  //   genre: 'Fantasia',
  //   id: 1,
  //   name: 'As Crônicas de Gelo e Fogo',
  //   releaseYear: 1991,
  // };
  
  // function getNamedBook() {
  //   // escreva seu código aqui
  //   books.forEach((vinte6) => {
  //       if (books.length === 26) {
  //           return vinte6
  //       }
  //   })
  // }

  const employeeGenerator = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_');
    return { `NomeCompleto`, email: `${email}@trybe.com` };
  };
  
  
  const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'),
      id2: callback('Luiza Drumond'),
      id3: callback('Carla Paiva'),
    };
    return employees;
  };
  
  console.log(newEmployees(employeeGenerator));