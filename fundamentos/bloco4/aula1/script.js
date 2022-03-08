// Exercicio 1

// let a = 5;
// let b = 3;

// console.log(a+b);

// console.log(a-b);

// console.log(a/b);

// console.log(a*b);


// Exercicio 2

// if (a > b) {
// console.log(a);
//     }    else if(b > a) {
//     console.log(b)}
//         else { console.log("iguais")}


// Exercicio 3

// let c = 8

// if (a > b && a > c) {
//     console.log(a);
// }   else if (b > a && b > c) {
//     console.log(b);
//     }    else { 
//         console.log(c) 
// }

// exercicio 4 

// if (a > 0) {
//     console.log("positivo");
// }   else if (a === 0) {
//     console.log("zero");
// }       else {
//     console.log("negativo");
// }


// exercicio 5

// let a = 30
// let b = 100
// let c = 50

// if (a + b + c === 180) {
//     console.log("true");
// }  else if (a + b + c < 0) {
//     console.log("error");
// }    else {
//         console.log("false");
//     }



// exercicio 6

let peca = "cavALO";
switch( (peca).toLowerCase()) {
    case "bispo":
    console.log("movimentos diagonais");
    break;
    case "peao":
        console.log("movimentos pra frente");
        break;
        case "torre":
            console.log("movimentos em retas");
            break;
            case "cavalo":
                console.log("movimentos em L");
                break;
                case "rei":
                    console.log("movimentos em todas direções");
                    break;
                    case "rainha":
                        console.log("movimentos em todas direções");
                        break;
                        default: console.log("error"); 
}

