// Estado Inicial de las Opciones
// Para nuevas opciones solo agregar al final del array
let informacion=['Todos','Personales','Contacto','Educacion','Habilidades','Experiencias','SobreMi'];
let opcionOld=informacion[1];

// Para cada seccion de informacion (o todas) se configura el
// Evento para 'over' y 'clic'
informacion.forEach(function(tipoInfo, index){
    document.getElementById('opcion'+tipoInfo).addEventListener('pointerover',function(){
        CambiarOpcion(tipoInfo);
    });
    document.getElementById('opcion'+tipoInfo).addEventListener('click',function(){
        CambiarOpcion(tipoInfo);
    });
    document.getElementById('datos'+tipoInfo).style.display='none';
});
// Estado Inicial: Datos Personales 
document.getElementById('datos'+opcionOld).style.display='block';
document.getElementById('opcion'+opcionOld).style.backgroundColor='black';
document.getElementById('opcion'+opcionOld).style.color='orange';

// Al cambiar de opcion reconfigura los estilos de:
//   las opciones (colores)
//   las secciones (display)
function CambiarOpcion(opcionNew){
    if(opcionOld!=opcionNew){
       if(opcionOld==='Todos'){
            informacion.forEach(function(tipoInfo, index) {
                document.getElementById('datos'+tipoInfo).style.display='none';
            });
            document.getElementById('datos'+opcionNew).style.display='block';
        }else{
            if(opcionNew==='Todos'){
                informacion.forEach(function(tipoInfo, index) {
                    document.getElementById('datos'+tipoInfo).style.display='block';
                });
            }else{
                document.getElementById('datos'+opcionOld).style.display='none';
                document.getElementById('datos'+opcionNew).style.display='block';
            }
        }
        document.getElementById('opcion'+opcionOld).style.backgroundColor='white';
        document.getElementById('opcion'+opcionOld).style.color='#B45F04';
        document.getElementById('opcion'+opcionNew).style.backgroundColor='black';
        document.getElementById('opcion'+opcionNew).style.color='orange';
        opcionOld=opcionNew;
    }
}