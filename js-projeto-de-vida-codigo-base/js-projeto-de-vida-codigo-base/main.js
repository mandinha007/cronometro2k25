const botoes = document.querySelectorAll(".botao");
const textos= document.querySelectorAll(".aba-conteudo");

for(let i=0;i <botoes.length;i++){
 botoes[i].onclick = function(){

    for(let j=0;j <botoes.length;j++){    
    botoes[j].classList.remove("ativo");
    textos[j].classList.remove("ativo");
        
    }
    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");
    }
console.log(i);
}

const contadores = document.querySelectorAll(".contador");

const tempoObjetivo1 = new Date("2025-12-12T00:00:00") - tempoAtual;
contadores[0].textContent = calculaTempo(tempoObjetivo1);
const tempoObjetivo2 = new Date("2025-12-31T00:00:00") - tempoAtual;
contadores[1].textContent = calculaTempo(tempoObjetivo2);
const tempoObjetivo3 = new Date("2030-12-31T00:00:00") - tempoAtual;
contadores[2].textContent = calculaTempo(tempoObjetivo3);
const tempoObjetivo4 = new Date("2035-05-05T00:00:00") - tempoAtual;
contadores[3].textContent = calculaTempo(tempoObjetivo4);

function calculaTempo(tempoObjetivo){
let tempoAtual = new Date();
let tempoFinal = tempoObjetivo - tempoAtual;
let segundos = tempoFinal/1000;
return segundos;

}







