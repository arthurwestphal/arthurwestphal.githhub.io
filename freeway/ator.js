let yAtor = 366;
let yAtor2 = 366;
let colidiu = false;
let xAtor = 100;
let xAtor2 = 180;
let pontos1 = 0;
let pontos2 = 0;

function mostraPlacar(){
  if(yAtor < 15){ 
      pontos1 +=1; voltarPosicao(); somPonto.play();
  }
  textAlign(CENTER);
  textSize(25);
  fill(color(0, 0, 255));
  text(pontos1, 150, 30);
}

function mostraPlacar2(){
  if(yAtor2 < 15){ pontos2 +=1; voltarPosicao2(); somPonto.play();}
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 0, 0));
  text(pontos2, 230, 30);
}

function verificaColisao(){
  for(let i=0; i < imagensCarros.length; i++){
    colidiu = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros[i], altura, xAtor, yAtor, 15);
    if(colidiu){voltarPosicao (); somColidiu.play();}
  }
}
    
    function verificaColisao2(){
  for(let i=0; i < imagensCarros.length; i++){
    colidiu2 = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros[i], altura, xAtor2, yAtor2, 15);
    if(colidiu2){voltarPosicao2(); somColidiu.play();}
    
    //if(pontos > 0){ pontos -=  1; }
  }
}

function voltarPosicao(){yAtor = 366;}
function voltarPosicao2(){yAtor2 = 366;}

function movimentaAtor(){
  if(keyIsDown(87)){
    if(yAtor > 5)
    yAtor -= 2;
  }
  if(keyIsDown(83)){
    if(yAtor < 365)
    yAtor += 2;
  }
}

function movimentaAtor2(){
  if(keyIsDown(UP_ARROW)){
    if(yAtor2 > 5){
      yAtor2 -= 2;
    }
  }
  if(keyIsDown(DOWN_ARROW)){
    if(yAtor2 < 365){
    yAtor2 += 2;
    }
  }
}
function vitoria(){
  if(pontos1 >= 10){
    textSize(50);
    fill(0, 100, 250);
    text(' VENCEU!!!', 150, 200);
    }
    if(pontos2 >= 10){
    textSize(50);
    fill(250, 100, 0);
    text(' VENCEU!!!', 150, 200); 
  }
}

function draw() {
  background(imagemDaEstrada);
  vitoria();
  if(!(pontos1 >= 10 || pontos2>= 10)){
    jogo();
  }
}


function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);               
  image(imagemDoAtor2, xAtor2, yAtor2, 30, 30);
}
