// ==========================
// FECHA DE LA BODA
// ==========================

const fechaBoda = new Date("2026-08-08T16:00:00").getTime();


// ==========================
// CUENTA REGRESIVA
// ==========================

const contador = setInterval(() => {

    const ahora = new Date().getTime();
    const diferencia = fechaBoda - ahora;

    if (diferencia <= 0) {

        clearInterval(contador);

        document.getElementById("dias").textContent = "00";
        document.getElementById("horas").textContent = "00";
        document.getElementById("minutos").textContent = "00";
        document.getElementById("segundos").textContent = "00";

        return;
    }

    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diferencia % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const segundos = Math.floor(
        (diferencia % (1000 * 60)) /
        1000
    );

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

}, 1000);


// ==========================
// BOTÓN ABRIR INVITACIÓN
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    const boton = document.getElementById("entrarBtn");
    const pantalla = document.getElementById("pantallaInicio");
    const musica = document.getElementById("musica");

    if (boton) {

        boton.addEventListener("click", () => {

            if (musica) {
                musica.play().catch(error => {
                    console.log("No se pudo reproducir la música:", error);
                });
            }

            if (pantalla) {

                pantalla.classList.add("ocultar");

                setTimeout(() => {
                    pantalla.style.display = "none";
                }, 1200);

            }

        });

    }

});


// ==========================
// ANIMACIONES AL HACER SCROLL
// ==========================

const elementos = document.querySelectorAll(".animar");

function mostrarElementos() {

    elementos.forEach((elemento) => {

        const posicion = elemento.getBoundingClientRect().top;

        if (posicion < window.innerHeight - 100) {
            elemento.classList.add("visible");
        }

    });

}

window.addEventListener("scroll", mostrarElementos);

mostrarElementos();