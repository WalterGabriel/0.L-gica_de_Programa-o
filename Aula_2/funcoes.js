let resultado = maiorNumero ();

function maiorNumero (n1, n2) {
n1 = prompt('Escolha um número');
n2 = prompt('Escolha outro número');

return  n1 > n2 ? `O maior é ${n1}` 
                : n2 > n1 ? `O maior é ${n2}` 
                :'São iguais';

}
console.log(resultado);
