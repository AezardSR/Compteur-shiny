let counter;
let numb;
let btnInc;
let btnReset;
let btnDec;
let btnChangeC;
let valueChange;
let nbPRencontre;
let n;


numb = document.getElementById('count');
counter = 0;
btnInc = document.getElementById('inc');
btnReset = document.getElementById('reset');
btnDec = document.getElementById('dec');
btnChangeC = document.getElementById('changeCount');
nbPRencontre = document.getElementById('n');
valueChange = document.getElementById('test');
n = 1;

numb.innerHTML = counter;

function incr(){
    counter = counter + n;
    numb.innerHTML = counter;
}

console.log(count)
function reset(){
    counter = 0;
    numb.innerHTML = counter;
}

function decr(){
    counter = counter - n;
    numb.innerHTML = counter;
}

function changeCount(){
    counter = parseInt(prompt('Nombre de pokémon Rencontré'));
    numb.innerHTML = counter;
}

function changeN(){
    n = parseInt(prompt('Rencontre par :'));
}


btnInc.onclick = function() {incr()};
btnReset.onclick = function() {reset()};
btnDec.onclick = function() {decr()};
btnChangeC.onclick = function() {changeCount()};
nbPRencontre.onclick = function() {changeN()};

