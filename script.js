// OCULTAR TODOS LOS TEMAS

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

    // OCULTAR TODOS
    temas.forEach(tema => {

        tema.style.display = "none";

    });

    // MOSTRAR SELECCIONADO
    document.getElementById(idTema).style.display = "flex";

    // IR ARRIBA
    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

}


// REGRESAR MENU

function volverMenu(){

    // MOSTRAR HERO
    document.querySelector(".hero").style.display = "flex";

    // MOSTRAR MENU
    document.getElementById("menu").style.display = "block";

    // OCULTAR TEMAS
    temas.forEach(tema => {

        tema.style.display = "none";

    });

    // BAJAR MENU
    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });

}
