function gerarNumeroaleario() {
return parseInt(Math.random() * 10 + 1);
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