// Variables globales
const formulario = document.querySelector("form");
const nombreInput = document.getElementById("nombre");
const telefonoInput = document.getElementById("telefono");
const contactosLista = document.getElementById("contactos");

// Obtiene los contactos guardados en el localStorage
let contactos = JSON.parse(localStorage.getItem("contactos")) || [];

// Agrega un contacto al localStorage y a la lista de contactos
function agregarContacto(nombre, telefono) {
    contactos.push({nombre: nombre, telefono: telefono});
    localStorage.setItem("contactos", JSON.stringify(contactos));
    mostrarContactos();
}

// Muestra la lista de contactos en la página
function mostrarContactos() {
    contactosLista.innerHTML = "";
    contactos.forEach((contacto, indice) => {
        let li = document.createElement("li");
        let nombreSpan = document.createElement("span");
        let telefonoSpan = document.createElement("span");
        let eliminarBoton = document.createElement("button");
        nombreSpan.textContent = contacto.nombre;
        telefonoSpan.textContent = contacto.telefono;
        eliminarBoton.textContent = "Eliminar";
        eliminarBoton.addEventListener("click", () => eliminarContacto(indice));
        li.appendChild(nombreSpan);
        li.appendChild(telefonoSpan);
        li.appendChild(eliminarBoton);
        contactosLista.appendChild(li);
    });
}

// Elimina un contacto del localStorage y de la lista de contactos
function eliminarContacto(indice) {
    contactos.splice(indice, 1);
    localStorage.setItem("contactos", JSON.stringify(contactos));
    mostrarContactos();
}

// Agrega un evento de envío de formulario para agregar un nuevo contacto
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    agregarContacto(nombreInput.value, telefonoInput.value);
    nombreInput.value = "";
    telefonoInput.value = "";
});

// Muestra la lista de contactos al cargar la página
mostrarContactos();
