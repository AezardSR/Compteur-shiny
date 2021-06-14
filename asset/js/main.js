let counter;
let numb;
let btnInc;
let btnReset;
let btnDec;
let btnChangeC;
let nbPRencontre;
let n;


numb = document.getElementById('count');
btnInc = document.getElementById('inc');
btnReset = document.getElementById('reset');
btnDec = document.getElementById('dec');
btnChangeC = document.getElementById('changeCount');
nbPRencontre = document.getElementById('n');
n = 1;

//permet de définir si il y a une valeur stocker et de donner le counter soit stocker ou 0
function getCounter(){
    if (localStorage.length == 1){
        counter = parseInt(localStorage.getItem('test'));
    } else {
        counter = 0;
    }
}

getCounter();


numb.innerHTML = counter;
//fonction pour pouvoir stocker en local le compte et pouvoir le récupérer plus tard
function stockValue(){
    localStorage.setItem('test', counter);
}
//utiliser pour supprimer le stockage local à l'appuis du btn reset
function resetValue(){
    localStorage.removeItem('test');
}
//fonctino pour augmentation du counter et la stocker en local
function incr(){
    counter = counter + n;
    numb.innerHTML = counter;
    stockValue();
}
//fonction reset et supprimer le stockage local
function reset(){
    counter = 0;
    numb.innerHTML = counter;
    resetValue();
}
//fonction pour réduire le counter et le stocker en local
function decr(){
    counter = counter - n;
    numb.innerHTML = counter;
    stockValue();
}
//fonction pour définir le counter manuellement et le stocker en local
function changeCount(){
    counter = parseInt(prompt('Nombre de pokémon Rencontré'));
    numb.innerHTML = counter;
    stockValue();
}
//fonction pour afficher par combien on augmente le compteur en appuiant sur les btns
function changeN(){
    n = parseInt(prompt('Rencontre par :'));
    btnInc.value = '+'+n;
    btnDec.value = '+'+n;
    nbPRencontre.value = 'rencontre par '+n;
}



btnInc.onclick = function() {incr()};//btn +
btnReset.onclick = function() {reset()};//btn reset
btnDec.onclick = function() {decr()};//btn -
btnChangeC.onclick = function() {changeCount()};//btn nombre de rencontre
nbPRencontre.onclick = function() {changeN()};//btn pour changer par combien on incrémente

