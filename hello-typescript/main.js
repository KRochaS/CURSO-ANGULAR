var minhaVar = 'Minha variável'; // Javascript puro
function minhaFuncao(x, y) {
    return x + y;
}
// ES 6 ou ES2015
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
// programação funcional
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; }); // ES 2015
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
// caso não queira tipar a variável colocando any
var n1 = 'dsdff'; // var n1: string = 'dfdff';
n1 = 4;