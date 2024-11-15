document.getElementById("fNombre").addEventListener('blur',function(){
    document.getElementById("campoNombre").innerText=document.getElementById("fNombre").value;
});

document.getElementById("fApellido").addEventListener('blur',function(){
    document.getElementById("campoApellido").innerText=document.getElementById("fApellido").value;
});

document.getElementById("fEdad").addEventListener('blur',function(){
    document.getElementById("campoEdad").innerText=document.getElementById("fEdad").value;
});

document.getElementById("fEmail").addEventListener('blur',function(){
    document.getElementById("campoEmail").innerText=document.getElementById("fEmail").value;
});

document.getElementById("fTelefono").addEventListener('blur',function(){
    document.getElementById("campoTel").innerText=document.getElementById("fTelefono").value;
});

document.getElementById("fDireccion").addEventListener('blur',function(){
    document.getElementById("campoDir").innerText=document.getElementById("fDireccion").value;
})

document.getElementById("fProvincia").addEventListener('blur',function(){
    document.getElementById("campoProv").innerText=document.getElementById("fProvincia").value;
})

document.getElementById("fCodigoPostal").addEventListener('blur',function(){
    document.getElementById("campoCodPos").innerText=document.getElementById("fCodigoPostal").value;
}); 

document.getElementById("fMetPrefTel").addEventListener('click',function(){
    document.getElementById("campoMetContacto").innerText='Teléfono';
}); 

document.getElementById("fMetPrefEmail").addEventListener('click',function(){
    document.getElementById("campoMetContacto").innerText='Email';
}); 

document.getElementById("fMetPrefCorreoPos").addEventListener('click',function(){
    document.getElementById("campoMetContacto").innerText='Correo Postal';
}); 

document.getElementById("fNoticias").addEventListener('click',function(){
    campo=document.getElementById("fNoticias");
    if(campo.checked)
        document.getElementById("campoSuscripNoticias").innerText='Si';
    else
        document.getElementById("campoSuscripNoticias").innerText='NO';
}); 

document.getElementById("fPromociones").addEventListener('click',function(){
    campo=document.getElementById("fPromociones");
    if(campo.checked)
        document.getElementById("campoSuscripPromociones").innerText='Si';
    else
        document.getElementById("campoSuscripPromociones").innerText='NO';
});

document.getElementById("fAlertas").addEventListener('click',function(){
    campo=document.getElementById("fAlertas");
    if(campo.checked)
        document.getElementById("campoSuscripAlertas").innerText='Si';
    else
        document.getElementById("campoSuscripAlertas").innerText='NO';;
});

document.getElementById("fEventos").addEventListener('click',function(){
    campo=document.getElementById("fEventos");
    if(campo.checked)
        document.getElementById("campoSuscripEventos").innerText='Si';
    else
        document.getElementById("campoSuscripEventos").innerText='NO';
});

document.getElementById("fMetPrefTel").click();
document.getElementById("fEventos").click();