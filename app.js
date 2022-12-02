const validar = document.getElementById("boton");

validar.addEventListener('click', function(e){
    let edad = document.getElementById('txtEdad').value
    if(edad >= 18){
        alert("Es mayor de edad :D ");
    }else{
        alert("Es menor de edad :( ");
    }
})

