var multiplicador = document.querySelector(".multiplicador");

var multiplicando = document.querySelector(".multiplicando");

var resposta = document.querySelector(".resposta");

var conferi = document.querySelector(".conferi");

const start = document.querySelector(".start");

var mensagem = document.querySelector(".mensagem");

// funçao que inicia o jogo ao click do botão start, faz gerar dois digitos aleatórios e executa multiplicação entre ambos.

  function iniciarJogo() {
    var operador1 = 9 /*Math.round(Math.random() * 10);*/
    multiplicador.value = operador1
    
    var operador2 = Math.round(Math.random() * 10);
    multiplicando.value = operador2
    

  }
  start.onclick = iniciarJogo;
  
  
  function verifica(){
    var produto = multiplicador.value * multiplicando.value;

    
    if(produto == resposta.value ){
      
     mensagem.value = "VOCÊ ACERTOU!"
      
    } else {
      
      mensagem.value = "VOCÊ ERROU!!!";
    }
  }
    mensagem.value = ("");
  conferi.onclick = verifica;
  

