//carros.js
//Carro
let xCarros = [600,600,600,600,600,600];
let yCarros = [40, 98, 150, 315, 210, 260];
let velocidadesCarros = [2, 2.5, 3,2, 4,5];
let comprimentoCarros =  [50, 50, 80, 50, 50,80]
let altura = 40;
function mostraCarro(){
  //print("quantidade de carros"+imagensCarros.length);
  for(let i=0; i< imagensCarros.length; i++){
  image(imagensCarros[i], xCarros[i], yCarros[i], comprimentoCarros[i], altura); 
}

}
function movimentaCarro(){
  for(let i=0; i< imagensCarros.length; i++){
   xCarros[i] -= velocidadesCarros[i];
  }
  
  for(let i=0; i< xCarros.length; i++){
  if(xCarros[i] < -50){
     xCarros[i] = 600; //Volta à posição inicial
     }
  }

}