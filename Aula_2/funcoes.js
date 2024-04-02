/*let resultado = maiorNumero ();

function maiorNumero (n1, n2) {
n1 = prompt('Escolha um número');
n2 = prompt('Escolha outro número');

return  n1 > n2 ? `O maior é ${n1}` 
                : n2 > n1 ? `O maior é ${n2}` 
                :'São iguais';

}
console.log(resultado);*/
/*
function calculaIMC(){
  peso = parseFloat(prompt('Digite seu peso em KG'));
  altura = parseFloat(prompt('Digite sua altura em metros'));

  let imc = peso / (altura^2);
  let mensagemDiagnostico;

  if (imc <= 18.5) {
    mensagemDiagnostico = ' abaixo do ideal';
  } else if (imc <= 25) {
    mensagemDiagnostico = ' normal';
  } else if (imc <= 30) {
    mensagemDiagnostico = ' acima do ideal';
  } else if (imc <= 35) {
    mensagemDiagnostico = ' indicando obesidade';
  } else if (imc <= 40) {
    mensagemDiagnostico = ' indicando obesidade severa';
  } else {
    mensagemDiagnostico = ' indicando obesidade mórbida';
  }

  alert(`Seu IMC é de ${imc.toFixed(2)}. Seu peso está${mensagemDiagnostico}`);
}

calculaIMC();*/


function Calcularfatorial(){
  let numero = parseInt(prompt('Digite um número para calcular o fatorial'));
  
  if (numero === 0 || numero === 1) {
    return 1
  } else {
    let fatorial = 1
    for (let contador = 2 ; contador <= numero; contador++ ){
      fatorial *= contador;
    }
    return fatorial;
  }
}
let resultado = Calcularfatorial();
console.log(resultado);
