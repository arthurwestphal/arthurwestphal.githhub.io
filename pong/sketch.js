//variaveis som
let ponto;
let raquetada;

//variaveis placar
let pontosMeu = 0;
let pontosOponente = 0;

//variaveis da bola
let xbola = 300;
let ybola = 200;
let diametro = 25;
let raio = diametro / 2;
let corbola = [130, 155, 255];
let velocidadex = 10;
let velocidadey = 10;

//variaveis da rakete
let alturaRaquete = 100;
let larguraRaquete = 20;

//variaveis da rakete do p1
let xminhaRaquete = 570;
let yminhaRaquete = 150;
let corRaquetep1 = [10, 122, 255]

//variaveis da rakete do p2
let xraqueteOponente = 10;
let yraqueteOponente = 150;
let corRaquetep2 = [250, 50, 0];

function preload(){
  raquetada = loadSound('raquetada.mp3');
  ponto = loadSound('ponto.mp3');
}
//config inicial
function setup() {
createCanvas(600, 400);
  largura = width;
  altura = height;
  print("largura: "+largura+" altura: "+altura);
}

//desenha-loop infinito
function draw() {
  background(0);
  vitoria();
  if(!(pontosMeu >= 10 || pontosOponente >= 10)){
    jogo();
  }
}

function jogo(){
  mostrabola();
  movimentobola();
  verificacolisao();
  mostraRaquete();
  movimentaRaquetep1();
  movimentaRaquetep2();
  colisaoMinhaRaquete();
  colisaoRaqueteOponente();
  mostrarPontosOponente();
  mostrarPontosMeu();
  frameRate(60);
}

function vitoria(){
  if(pontosMeu >= 10){
    textSize(50);
    fill(0, 100, 250);
    text('P1 VENCEU!!!', 150, 200);
    }
    if(pontosOponente >= 10){
    textSize(50);
    fill(250, 100, 0);
    text('P2 VENCEU!!!', 150, 200); 
  }
}

function mostrarPontosOponente(){
  fill(255, 255);
  strokeWeight(2);
  stroke(0);
  rect(42, 14, 40, 30, 10);
  
  fill(255, 100, 0);
  textSize(30);
  text(pontosOponente, 50, 40) ;
  if(xbola >= 590){
    pontosOponente += 1;
    ponto.play();
  }
}


function mostrarPontosMeu(){
  fill(255, 255);
  strokeWeight(2);
  stroke(0);
  rect(522, 14, 40, 30, 10);
  
  fill(0, 100, 255);
  textSize(30);
  text(pontosMeu, 530, 40) ;
  if(xbola <= 10){
    pontosMeu += 1;
    ponto.play();
  }
}

function colisaoMinhaRaquete(){
  if(xbola + raio > xminhaRaquete && ybola - raio < yminhaRaquete + alturaRaquete && ybola + raio > yminhaRaquete){
    if(!(xbola < 300 && velocidadex > 0 || xbola > 300 && velocidadex < 0)){
     velocidadex *= -1;
      raquetada.play();
    }
  }
}

function colisaoRaqueteOponente(){
  if(xbola - raio < xraqueteOponente + larguraRaquete && ybola - raio < yraqueteOponente + alturaRaquete && ybola + raio > yraqueteOponente){
    if(!(xbola < 300 && velocidadex > 0 || xbola > 300 && velocidadex < 0)){
     velocidadex *= -1;
      raquetada.play();
    }
  }
}

function movimentaRaquetep1(){
  if(keyIsDown(UP_ARROW)){
    if(yminhaRaquete < 0){
    yminhaRaquete = 0;
    }
    else{
    yminhaRaquete -= 10;
    } 
  }
  if(keyIsDown(DOWN_ARROW)){
    if(yminhaRaquete > 300){
    yminhaRaquete = 300;
    }
    else{
    yminhaRaquete += 10;
    }
  }
}

function movimentaRaquetep2(){
  if(keyIsDown(87)){
    if(yraqueteOponente < 0){
    yraqueteOponente = 0;
    }
    else{
    yraqueteOponente -= 10;
    }
  }
  if(keyIsDown(83)){
    if(yraqueteOponente > 300){
    yraqueteOponente = 300;
    }
    else{
    yraqueteOponente += 10;
    }
  }
}

function mostraRaquete(){
  fill(corRaquetep1);
  rect(xminhaRaquete, yminhaRaquete, larguraRaquete, alturaRaquete);
  
  fill(corRaquetep2);
  rect(xraqueteOponente, yraqueteOponente, larguraRaquete, alturaRaquete);
}

function mostrabola(){
  fill(corbola);
  circle(xbola, ybola, diametro);
}

function movimentobola(){
  if(frameCount > 200){
  xbola += velocidadex; //incremento
  ybola += velocidadey; //incremento
  }
}

function verificacolisao(){
  //colisão horizontal x
  if (xbola + raio > largura || xbola - raio < 0 ){
  //velocidadex = velocidadex * -1
  velocidadex *= -1;
  }
  
  //colisão vertical y
  if (ybola + raio > altura || ybola - raio < 0 ){
  //velocidadey = velocidadey * -1
  velocidadey *= -1;
  }
}

