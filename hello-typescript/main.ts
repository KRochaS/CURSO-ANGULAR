var minhaVar = 'Minha variável'; // Javascript puro
function minhaFuncao(x, y) {
    return x + y;
}

// ES 6 ou ES2015
let num = 2;
const PI = 3.14;

var numeros = [1,2,3];

// programação funcional
numeros.map(function (valor) {
    return valor * 2;
});

numeros.map(valor => valor * 2); // ES 2015

class Matematica {
    soma (x,y){
        return x + y;
    }
}
// caso não queira tipar a variável colocando any
var n1: any = 'dsdff'; // var n1: string = 'dfdff';
n1 = 4;
