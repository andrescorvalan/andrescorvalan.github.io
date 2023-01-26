var claseDeInfo = [];   // Contendrá las opciones del menu (tipo de informacion del CV)
var opcionOld;          // Contendrá la ultima opcion seleccionada.

for (let opcion of document.getElementsByClassName("menuItem"))
    claseDeInfo.push(opcion.id);

if(claseDeInfo.length>0)
    opcionOld=claseDeInfo[0];

// Para cada opcion del menu (tipo de informacion del CV) se configura: 
//  los eventos 'over' y 'clic'.
//  se ocultan las secciones de los datos en si.
claseDeInfo.forEach(function(tipoInfo, index){
    document.getElementById(tipoInfo).addEventListener('pointerover',function(){
        CambiarOpcion(tipoInfo);
    });
    document.getElementById(tipoInfo).addEventListener('click',function(){
        CambiarOpcion(tipoInfo);
    });
    document.getElementById('datos'+tipoInfo).style.display='none';
});

// Estado Inicial: se habilita la primer opcion del menu 
document.getElementById(opcionOld).style.backgroundColor='black';
document.getElementById(opcionOld).style.color='orange';
document.getElementById('datos'+opcionOld).style.display='block';

// Al cambiar de opcion reconfigura los estilos de:
//   las opciones del menu (colores)
//   los datos (display)
function CambiarOpcion(opcionNew){
    if(opcionOld!=opcionNew){
        if(opcionOld==='Todos'){
            claseDeInfo.forEach(function(tipoInfo,index){
                document.getElementById('datos'+tipoInfo).style.display='none';
            });
            document.getElementById('datos'+opcionNew).style.display='block';
        }else{
            if(opcionNew==='Todos')
                claseDeInfo.forEach(function(tipoInfo,index){
                    document.getElementById('datos'+tipoInfo).style.display='block';
                });
            else{
                document.getElementById('datos'+opcionOld).style.display='none';
                document.getElementById('datos'+opcionNew).style.display='block';
            }
        }
        document.getElementById(opcionOld).style.backgroundColor='white';
        document.getElementById(opcionOld).style.color='#B45F04';
        document.getElementById(opcionNew).style.backgroundColor='black';
        document.getElementById(opcionNew).style.color='orange';
        opcionOld=opcionNew;
    }
}