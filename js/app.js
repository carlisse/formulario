/*const hamburguesa = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const enlaces = document.querySelectorAll('.navegacion a');

document.addEventListener('DOMContentLoaded',()=>{
    mostrarMenu();
    cerrarMenu();
});

function mostrarMenu(){
    hamburguesa.addEventListener('click',()=>{
        navegacion.classList.toggle('ocultar');

    });

}
function cerrarMenu(){
    enlaces.forEach(enlace => {
        enlace.addEventListener('click',(e)=>{
            
            if(e.target.tagName === 'A'){
                navegacion.classList.add('ocultar');
            };
        });
    });
}*/

//formulario//

const usuario = document.getElementById("usuario")
const password = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    if(usuario.value.length <6){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(password.value.length < 8){
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }

})
    