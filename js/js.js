/*************************************************LOGICA LOGIN*************************************************************************/
const personajes = {
    usuario_1: {
        email: "usuario1@gmail.com",
        password: "PrimerUsuario01"
    },
    usuario_2: {
        email: "usuario2@gmail.com",
        password: "SegundoUsuario02"
    },
    usuario_3: {
        email: "usuario3@gmail.com",
        password: "TercerUsuario03"
    }
};
let correo;
let contrasena;
const corre = document.getElementById("corre");

function validarCorreo() {
  const expression = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    let error = "";
    if (!expression.test(correo)) {
       error = "¡Por favor, escriba adecuadamente <br>el correo electrónico!"
    }
    if(correo === ""){
        error = "¡Por Favor, <br>ingrese un correo electrónico!";
    }

    return error;
}

function validarContrasena() {
    let contra = "";
    
    if(contrasena === ""){
       contra = "¡Por favor, ingrese una Contraseña!";
    }else 
        if (contrasena.length < 8) {
            contra = "¡La contraseña debe tener mínimo 8 caracteres!";
        
    } else 
        if (!(/[a-z]/.test(contrasena) && /[A-Z]/.test(contrasena) && /\d{2}/.test(contrasena))) {
            contra = "¡La contraseña debe tener al menos <br> una letra minúscula, una mayúscula y dos números.";
        
    }
    return contra;
}

function validarUsuario() {
    let resultado = "";

    if (correo !== personajes.usuario_1.email && contrasena !== personajes.usuario_1.password || 
        correo !== personajes.usuario_2.email && contrasena !== personajes.usuario_2.password ||
        correo !== personajes.usuario_3.email && contrasena !== personajes.usuario_3.password) {
            resultado = "¡Usuario no encontrado, <br>Correo o contraseña incorrecta!";
       
    } 
    return resultado;
   
}

function promesa() {
    return new Promise((resolve) => { 
        setTimeout(() => {
            resolve("Operación completada con éxito");
        }, 2000);
    });
}

function ingresar() {
    correo = document.getElementById("input-usuario").value.toLowerCase();
    contrasena = document.getElementById("input-clave").value;
    let error = validarCorreo();
    let contra = validarContrasena();
    let resultado = validarUsuario();

    if (correo === personajes.usuario_1.email && contrasena === personajes.usuario_1.password || 
        correo === personajes.usuario_2.email && contrasena === personajes.usuario_2.password ||
        correo === personajes.usuario_3.email && contrasena === personajes.usuario_3.password) {
            
            resultado = "¡Cargando...!";
        promesa().then(() => {
            window.location.href = "secondpage.html";
        }).catch((error) => {
            console.error(error);
        });
    }
    
    if (error != "") {
        corre.innerHTML = error;
        return;
    }

    if (contra != "") {
        corre.innerHTML = contra;
        return;
    }

    if (resultado != "") {
       corre.innerHTML = resultado;
        return;
    }    
}

function clean() {
    document.getElementById("input-usuario").value = "";
    document.getElementById("input-clave").value = "";
    corre.innerHTML = ""; 
}