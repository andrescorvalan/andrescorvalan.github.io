//0: se eligio Piedra
//1: se eligio Papel
//2: se eligio Tijera
function comparar(eleccionUsuario){
    eleccionMaquina=Math.floor(Math.random()*3);
    eleccionUsuario=parseInt(eleccionUsuario);

    document.getElementById("punio").style.display='none';
    switch(eleccionMaquina){
        case 0:
            document.getElementById("piedra").style.display='block'; 
            break;
        case 1:
            document.getElementById("papel").style.display='block';
            break;
        case 2:
            document.getElementById("tijera").style.display='block';
            break;
    }
    if(eleccionMaquina==eleccionUsuario){
        document.getElementById("resultado").innerText='¡¡¡Empate!!!';
        document.getElementById("resultado").style.fontSize='2em';
        document.getElementById("resultado").style.color='blue';
    }
    else{
        if( (eleccionMaquina==0 && eleccionUsuario==1) ||
            (eleccionMaquina==1 && eleccionUsuario==2) ||
            (eleccionMaquina==2 && eleccionUsuario==0)){ 
            //gana el usuario
            document.getElementById("resultado").innerText='¡¡¡Ha ganado!!!';
            document.getElementById("resultado").style.fontSize='2em';
            document.getElementById("resultado").style.color='green';
        }else{
             //gana la maquina
            document.getElementById("resultado").innerText='¡¡¡Ha perdido!!!';
            document.getElementById("resultado").style.fontSize='2em';
            document.getElementById("resultado").style.color='red';
        }
    }
    document.getElementById("resultado").style.display='block';
    document.getElementById("botPiedra").disabled=true;
    document.getElementById("botPapel").disabled=true;
    document.getElementById("botTijera").disabled=true;
    document.getElementById("botPiedra").style.backgroundColor='gray';
    document.getElementById("botPapel").style.backgroundColor='gray';
    document.getElementById("botTijera").style.backgroundColor='gray';
}

document.getElementById("botPiedra").addEventListener('click',function(){
    comparar(0);
});

document.getElementById("botPapel").addEventListener('click',function(){
    comparar(1);
});

document.getElementById("botTijera").addEventListener('click',function(){
    comparar(2);
});

document.getElementById("botJugar").addEventListener('click',function(){
    document.getElementById("botPiedra").disabled=false;
    document.getElementById("botPapel").disabled=false;
    document.getElementById("botTijera").disabled=false;
    document.getElementById("botPiedra").style.backgroundColor='green';
    document.getElementById("botPapel").style.backgroundColor='green';
    document.getElementById("botTijera").style.backgroundColor='green';
    document.getElementById("piedra").style.display='none';
    document.getElementById("papel").style.display='none';
    document.getElementById("tijera").style.display='none';
    document.getElementById("resultado").style.display='none';
    document.getElementById("punio").style.display='block';
    document.getElementById("punio").style.border='1px solid green';
    document.getElementById("punio").style.animation='punch 1s ease-in-out infinite';
});