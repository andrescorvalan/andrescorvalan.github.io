document.getElementById('datosPersonales').addEventListener('pointerover',function(){
    activarDatosPersonales();
});
document.getElementById('datosPersonales').addEventListener('click',function(){
    activarDatosPersonales();
});
document.getElementById('datosEducacion').addEventListener('pointerover',function(){
    activarDatosEducacion();
});
document.getElementById('datosEducacion').addEventListener('click',function(){
    activarDatosEducacion();
});
document.getElementById('datosHabilidades').addEventListener('pointerover',function(){
    activarDatosHabilidades();
});
document.getElementById('datosHabilidades').addEventListener('click',function(){
    activarDatosHabilidades();
});
document.getElementById('datosExperiencias').addEventListener('pointerover',function(){
    activarDatosExperiencias();
});
document.getElementById('datosExperiencias').addEventListener('click',function(){
    activarDatosExperiencias();
});
document.getElementById('datosTodos').addEventListener('pointerover',function(){
    activarDatosTodos();
});
document.getElementById('datosTodos').addEventListener('click',function(){
    activarDatosTodos();
});

function cambiarSeccion(seccionNew){
    if(seccionOld==='Todos'){
        document.getElementById('seccionAnclas').style.display='none';
        document.getElementById('seccionEducacion').style.display='none';
        document.getElementById('seccionPersonales').style.display='none';
        document.getElementById('seccionHabilidades').style.display='none';
        document.getElementById('seccionExperiencias').style.display='none';
        document.getElementById('seccion'+seccionNew).style.display='block';
    }else{
        if(seccionNew==='Todos'){
            document.getElementById('seccionAnclas').style.display='block';
            document.getElementById('seccionEducacion').style.display='block';
            document.getElementById('seccionPersonales').style.display='block';
            document.getElementById('seccionHabilidades').style.display='block';
            document.getElementById('seccionExperiencias').style.display='block';
        }else{
            document.getElementById('seccion'+seccionOld).style.display='none';
            document.getElementById('seccion'+seccionNew).style.display='block';
        }
    }
    document.getElementById('datos'+seccionOld).style.backgroundColor='white';
    document.getElementById('datos'+seccionOld).style.color='#B45F04';
    document.getElementById('datos'+seccionNew).style.backgroundColor='black';
    document.getElementById('datos'+seccionNew).style.color='orange';
    seccionOld=seccionNew;
}
function activarDatosPersonales(){
    if(seccionOld!='Personales')
        cambiarSeccion('Personales');
}   
function activarDatosEducacion(){
    if(seccionOld!='Educacion')
        cambiarSeccion('Educacion');
}
function activarDatosHabilidades(){
    if(seccionOld!='Habilidades')
        cambiarSeccion('Habilidades');
}
function activarDatosExperiencias(){
    if(seccionOld!='Experiencias')
        cambiarSeccion('Experiencias');
}
function activarDatosTodos(){
    if(seccionOld!='Todos')
        cambiarSeccion('Todos');   
}
document.getElementById('seccionPersonales').style.display='block';
document.getElementById('datosPersonales').style.backgroundColor='black';
document.getElementById('datosPersonales').style.color='orange';
let seccionOld='Personales';