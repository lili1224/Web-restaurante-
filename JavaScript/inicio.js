// Carrusel de imagenes

window.onload = function () {
    // Variables
    const IMAGENES = [
        'https://i.ibb.co/2k7q1BX/restaurante-9.jpg',
        'https://i.ibb.co/HGr0ygc/restaurante-10.jpg',
        'https://i.ibb.co/LC2510c/restaurante-8.jpg',
        'https://i.ibb.co/Ht6zXVn/restaurante-7.jpg',
        'https://i.ibb.co/JyBVjbR/restaurante-6.jpg',
        'https://i.ibb.co/pfqVk5B/restaurante-5.jpg',
        'https://i.ibb.co/nB8j4Jh/restaurante-4.jpg',
        'https://i.ibb.co/7RCZVB3/restaurante-3.jpg',
        'https://i.ibb.co/5LT71N7/restaurante-1.jpg',
        'https://i.ibb.co/GcgqgYX/restaurante-2.jpg'        
    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 5000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#atras');
    let $botonAvanzar = document.querySelector('#siguiente');
    let $imagen = document.querySelector('#imagenes');
    let $botonPlay = document.querySelector('#play');
    let $botonStop = document.querySelector('#stop');
    let intervalo;

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    /**
     * Activa el autoplay de la imagen
     */
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        // Desactivamos los botones de control
        $botonAvanzar.setAttribute('disabled', true);
        $botonRetroceder.setAttribute('disabled', true);
        $botonPlay.setAttribute('disabled', true);
        $botonStop.removeAttribute('disabled');

    }

    /**
     * Para el autoplay de la imagen
     */
    function stopIntervalo() {
        clearInterval(intervalo);
        // Activamos los botones de control
        $botonAvanzar.removeAttribute('disabled');
        $botonRetroceder.removeAttribute('disabled');
        $botonPlay.removeAttribute('disabled');
        $botonStop.setAttribute('disabled', true);
    }

    // Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    $botonPlay.addEventListener('click', playIntervalo);
    $botonStop.addEventListener('click', stopIntervalo);
    // Iniciar
    renderizarImagen();
}
