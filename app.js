let numS =0;
let numInt=0;
let listnum = [];
let numMax = 10;

console.log(numS)
function asignarElem(elemento,texto){
    let elemntHtml = document.querySelector(elemento);
    elemntHtml.innerHTML = texto;
    return;
}
function ver() {
let numUsu = parseInt(document.getElementById('valorUs').value);
console.log(numS);
console.log(numInt);

if (numUsu === numS){
    
asignarElem('p',`Acertaste el numero en ${numInt} ${(numInt === 1)  ? 'Vez' : 'Veces '}`);
 document.getElementById('reiniciar').removeAttribute('disabled');
}

 else{
    if (numUsu> numS) {
        asignarElem('p','El numero secreto es menor');
    }else{
        asignarElem('p','El numero secreto es mayor');
        limpiar();
    }
}
numInt++;
//console.log(numUsu == numS);
return;

}
function limpiar(){

  document.querySelector('#valorUs').value ='';
   
}   
function numSec() {

    let numG = Math.floor(Math.random()*numMax)+1;

    console.log(numG);
    console.log(listnum);
    if(listnum.length == numMax){
    
         asignarElem('p','Ya se soltearon todos los numeros');

    }else{

        if (listnum.includes(numG)) {
            return numSec();
    
        }else{
    
          listnum.push(numG);
          return numG;
        }
        
    }
   
    
 }
function mensajesInic(){
    asignarElem('h1','Juego del numero secreto');
    asignarElem('p',`Indica un numero del 1 al ${numMax}`);
    numS = numSec();
    numInt=1;
}

function ReiniciarJuego(){
    //Limpiar caja
    limpiar();
    //indicar mensaje de inicio
    mensajesInic();
    //generar numero aleatorio 
    //inicializar el cont Intentos
    //desabillitar el button
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}
mensajesInic(); 
