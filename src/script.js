
var folhas = document.getElementsByName('folhas-enfesto');
var outros = parseInt(document.querySelector('.input-folha').value);

function desmarcaRadio (){
    for(let i = 0; i <folhas.length;i++)
    folhas[i].checked = false
    }

    function desmarcaInput (){
        for(let i = 0; i < folhas.length;i++){
            if (folhas[i].checked)
            document.querySelector(".input-folha").valueAsNumber = null;
        }
        }


function mostraResultado(){

const pcsFolha = parseInt(document.querySelector('#pçsfolha').value);
const pcsTotal = parseInt(document.querySelector('#pçstotal').value);
const mapaMts = document.querySelector('#mapa-mts').value;
const result1 = document.querySelector('.result-1');
const result2= document.querySelector('.result-2');
const outros = parseInt(document.querySelector('.input-folha').value);

const divPcsTotal = Math.floor(pcsTotal / pcsFolha);


let numEnfesto = 0
let contDez = 0;
for(let l = 0; l < folhas.length; l++){
if(folhas[l].checked){
for (let i = 0; i <= divPcsTotal; i++) {
    if (contDez === parseInt(folhas[l].value - 1)) {
      numEnfesto++;
      contDez = 0;
    }
    else{
        contDez++
    }
}
}}
if(outros != null){
    for (let i = 0; i <= divPcsTotal; i++) {
        if (contDez === outros-1) {
          numEnfesto++;
          contDez = 0;
        }
        else{
            contDez++
        }
    }
}

if (numEnfesto == 1){
    for(let l = 0; l < folhas.length; l++){
        if(folhas[l].checked){
    result1.innerHTML = `${numEnfesto} enfesto de ${parseInt(folhas[l].value)} folhas(${mapaMts}M)`;
    break;
} else {
    result1.innerHTML = `${numEnfesto} enfesto de ${outros} folhas(${mapaMts}M)`;
}}}
else{
    for(let l = 0; l < folhas.length; l++){
        if(folhas[l].checked){
    result1.innerHTML = `${numEnfesto} enfestos de ${parseInt(folhas[l].value)} folhas(${mapaMts}M)`;
    break;
} else {
    result1.innerHTML = `${numEnfesto} enfestos de ${outros} folhas(${mapaMts}M)`;
}}
}
} 