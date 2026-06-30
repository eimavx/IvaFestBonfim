const imagens = [

"ivafestfoto (19).jpeg",
"ivafestfoto (18).jpeg",

"ivafestfoto (1).jpeg",
"ivafestfoto (2).jpeg",
"ivafestfoto (3).jpeg",
"ivafestfoto (4).jpeg",
"ivafestfoto (5).jpeg",
"ivafestfoto (6).jpeg",
"ivafestfoto (7).jpeg",
"ivafestfoto (8).jpeg",
"ivafestfoto (9).jpeg",
"ivafestfoto (10).jpeg",
"ivafestfoto (11).jpeg",
"ivafestfoto (12).jpeg",
"ivafestfoto (13).jpeg",
"ivafestfoto (14).jpeg",
"ivafestfoto (15).jpeg",
"ivafestfoto (16).jpeg",
"ivafestfoto (17).jpeg",
"ivafestfoto (20).jpeg"

];

let indice = 0;

const slide = document.getElementById("slide");

function trocarImagem(){

    indice++;

    if(indice >= imagens.length){

        indice = 0;

    }

    slide.style.opacity = 0;

    setTimeout(()=>{

        slide.src = imagens[indice];

        slide.style.opacity = 1;

    },400);

}

setInterval(trocarImagem,3500);