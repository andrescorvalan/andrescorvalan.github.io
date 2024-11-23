var claseDeInfo = [];   // Contendrá los id de las seccion del CV

for (let opcion of document.getElementsByClassName("marcoInfoCV"))
    claseDeInfo.push(opcion.id);

document.getElementById("botonLeerMas1").addEventListener('click',function(){
    boton=document.getElementById("botonLeerMas1");
  
    if(boton.innerText==="Leer mas"){
        boton.innerText="Leer menos";
        claseDeInfo.forEach(function(tipoInfo, index){
            document.getElementById(tipoInfo).style.display='block';
        });
    }else{ 
        boton.innerText="Leer mas";
        claseDeInfo.forEach(function(tipoInfo, index){
            document.getElementById(tipoInfo).style.display='none';
        });
    }
});
