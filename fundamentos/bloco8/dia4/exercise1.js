const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    // escreva seu código aqui
    // return arrays.reduce(function (flat, toFlatten) {
    //     return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    //   }, []);

    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/flat método mais fácil
const arraysFlat = arrays.flat()
console.log(arraysFlat);    
}
flatten()