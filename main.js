var multiplicador = document.querySelector(".multiplicador");

var multiplicando = document.querySelector(".multiplicando");

var resposta = document.querySelector(".resposta");
resposta.focus();

var conferi = document.querySelector(".conferi");

const start = document.querySelector(".start");

var mensagem = document.querySelector(".mensagem");

var ganhouPontos = document.querySelector(".ganhouPontos");

var perdeuPontos = document.querySelector(".perdeuPontos");

// funçao que inicia o jogo ao click do botão start, faz gerar dois digitos aleatórios e executa multiplicação entre ambos.

function iniciarJogo() {
  var operador1 = 5 //Math.round(Math.random() * 10);
  multiplicador.value = operador1
  
  var operador2 = Math.round(Math.random() * 10);
  multiplicando.value = operador2
  
  mensagem.value = "";
  resposta.value = "";
  
}

start.onclick = iniciarJogo;
  
var maisPontos = 1;
var perdeu = ganhouPontos.value;

function verifica(){
  var produto = multiplicador.value * multiplicando.value;

  if(produto == resposta.value ){
    
    mensagem.value = "VOCÊ ACERTOU!";
    ganhouPontos.value = maisPontos++
    
  } else {
    
    mensagem.value = "VOCÊ ERROU!!!";
    perdeuPontos.value = perdeu--
  }
}
conferi.onclick = verifica;