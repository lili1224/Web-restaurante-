function mostrarAgradecimiento() {
    
    var fechaSeleccionada = document.getElementById("fecha").value;
    var horaSeleccionada = document.getElementById("hora").value;
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var numeroPersonas = document.getElementById("numero").value;
    var dni = document.getElementById("dni").value;
    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;

    var mensaje = "Gracias por reservar mesa:<br>" +
                  "<strong>Fecha:</strong> " + fechaSeleccionada + "<br>" +
                  "<strong>Hora:</strong> " + horaSeleccionada + "<br>" +
                  "<strong>Nombre:</strong> " + nombre + "<br>" +
                  "<strong>Apellidos:</strong> " + apellidos + "<br>" +
                  "<strong>Número de personas:</strong> " + numeroPersonas + "<br>" +
                  "<strong>DNI:</strong> " + dni + "<br>" +
                  "<strong>Teléfono:</strong> " + telefono + "<br>" +
                  "<strong>Correo Electrónico:</strong> " + correo;

    var mensajeDiv = document.createElement("div");
    mensajeDiv.innerHTML = mensaje;
    mensajeDiv.style.textAlign = "center";
    mensajeDiv.style.padding = "20px";
    mensajeDiv.style.border = "1px solid #ccc";
    mensajeDiv.style.borderRadius = "5px";
    mensajeDiv.style.backgroundColor = "#f4f4f4";
    mensajeDiv.style.position = "fixed";
    mensajeDiv.style.top = "50%";
    mensajeDiv.style.left = "50%";
    mensajeDiv.style.transform = "translate(-50%, -50%)";
    mensajeDiv.style.zIndex = "9999";

    var cerrarBoton = document.createElement("button");
    cerrarBoton.textContent = "Cerrar";
    cerrarBoton.style.marginTop = "10px";
    cerrarBoton.style.background = "#00A4BD";
    cerrarBoton.style.color = "white";
    cerrarBoton.style.border = "none";
    cerrarBoton.style.padding = "10px";
    cerrarBoton.style.borderRadius = "4px";
    cerrarBoton.style.cursor = "pointer";
    cerrarBoton.addEventListener("click", function () {
        
        document.body.removeChild(mensajeDiv);
    });

    mensajeDiv.appendChild(cerrarBoton);

    
    document.body.appendChild(mensajeDiv);
}


