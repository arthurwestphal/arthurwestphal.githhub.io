function setup() {//Preparação
  createCanvas(500, 400);
  trilhaSonora.loop();
}

function draw() { //Desenha o Jogo
  background(imagemDaEstrada); 
  vitoria();
  if(!(pontos1 >= 10 || pontos2 >=10 )){
     jogo();
}
}

  function jogo(){
   movimentaAtor();
  movimentaAtor2();
  mostraCarro();
  mostraAtor();
  movimentaCarro();
  verificaColisao();
  verificaColisao2();
  mostraPlacar();
  mostraPlacar2();
}//Fim do Draw

