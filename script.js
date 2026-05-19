// OCULTAR TODOS LOS TEMAS AL INICIO

const temas = document.querySelectorAll(".pantalla-tema");

temas.forEach(tema => {

    tema.style.display = "none";

});


// IR AL MENU

function irMenu(){

    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });

}


// MOSTRAR TEMA

function mostrarTema(idTema){

    // OCULTAR HERO
    document.querySelector(".hero").style.display = "none";

    // OCULTAR MENU
    document.getElementById("menu").style.display = "none";

    // OCULTAR TODOS LOS TEMAS
    temas.forEach(tema => {

        tema.style.display = "none";

    });

    // MOSTRAR EL TEMA SELECCIONADO
    const temaSeleccionado = document.getElementById(idTema);

    temaSeleccionado.style.display = "flex";

    // SUBIR ARRIBA
    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

}


// REGRESAR AL MENU

function volverMenu(){

    // MOSTRAR HERO
    document.querySelector(".hero").style.display = "flex";

    // MOSTRAR MENU
    document.getElementById("menu").style.display = "block";

    // OCULTAR TEMAS
    temas.forEach(tema => {

        tema.style.display = "none";

    });

    // IR AL MENU
    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });

}

