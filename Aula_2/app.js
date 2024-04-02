let listaDeNumerosEscolhidos = [];
let numeroLimiteDoSorteio = 10;
function gerarNumeroaleario() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimiteDoSorteio + 1);
  let quantidadeDenumerosEscolhidos = listaDeNumerosEscolhidos.length;

  if (quantidadeDenumerosEscolhidos == numeroLimiteDoSorteio){
    listaDeNumerosEscolhidos = [];
  }
  
  if (listaDeNumerosEscolhidos.includes(numeroEscolhido)) {
    return gerarNumeroaleario();
  } else {
    listaDeNumerosEscolhidos.push(numeroEscolhido);
    return numeroEscolhido;
  }
}

function limparCampo () {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo (){
  numeroSecreto = gerarNumeroaleario();
  limparCampo();
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
  tentivas = 1;
}

let numeroSecreto = gerarNumeroaleario();
let tentivas = 1;
exibirMensagemInicial();

function exibirTexto(tag, texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;

}

function exibirMensagemInicial() {
  exibirTexto('h1', 'Jogo do Número Secreto');
  exibirTexto('p', 'Escolha um número entre 1 e 10');
}

function verificarChute() {

  let chute = document.querySelector('input').value;
  

  if (chute == numeroSecreto) {
    exibirTexto('h1', 'Muito bem!');
    palavraTentativa = tentivas > 1 ? 'tentativas' : 'tentativa';
    mensagemSucesso = `Você acertou com ${tentivas} ${palavraTentativa}`;
    exibirTexto('p', mensagemSucesso);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
      if (chute > numeroSecreto){
          exibirTexto('p', 'Não foi dessa vez. Tente um número menor');
      } else {
          exibirTexto('p', 'Não foi dessa vez. Tente um número maior');
        }
      tentivas++;
      limparCampo();
    }
}