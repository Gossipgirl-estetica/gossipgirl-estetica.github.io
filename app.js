// --- Datos base ---
const perfiles = {
    Magali: ["Lifting de pestañas", "Perfilado de cejas"],
    Mariana: ["Uñas permanentes", "Uñas semipermanentes"]
};

// --- Cargar turnos guardados (localStorage) ---
let turnosReservados = JSON.parse(localStorage.getItem("turnos")) || {};

function abrirPerfil(nombre) {
    document.querySelector(".profiles").classList.add("hidden");
    document.getElementById("turnos").classList.remove("hidden");
    document.getElementById("nombrePerfil").innerText = `Turnos con ${nombre}`;

    const servicioSelect = document.getElementById("servicio");
    servicioSelect.innerHTML = "";
    perfiles[nombre].forEach(servicio => {
        const option = document.createElement("option");
        option.text = servicio;
        servicioSelect.add(option);
    });

    mostrarHorarios(nombre);
    document.getElementById("mensaje").innerText = "";
}

function mostrarHorarios(nombre) {
    const contenedor = document.getElementById("horarios");
    contenedor.innerHTML = "";

    for (let hora = 9; hora <= 19; hora++) {
        const horaStr = `${hora}:00`;
        const div = document.createElement("div");
        div.className = "horario";
        div.innerText = horaStr;

        const reservado = turnosReservados[nombre]?.find(t => t.hora === horaStr);

        if (reservado) {
            div.classList.add("reservado");
            const btnCancelar = document.createElement("button");
            btnCancelar.innerText = "Cancelar";
            btnCancelar.className = "cancelar-btn";
            btnCancelar.onclick = () => cancelarTurno(nombre, horaStr);
            div.appendChild(btnCancelar);
        } else {
            div.onclick = () => reservarTurno(nombre, horaStr);
        }

        contenedor.appendChild(div);
    }
}

function reservarTurno(nombre, hora) {
    const servicio = document.getElementById("servicio").value;
    turnosReservados[nombre] = turnosReservados[nombre] || [];
    turnosReservados[nombre].push({ hora, servicio });

    guardarTurnos();
    document.getElementById("mensaje").innerText =
        `✅ Turno para ${servicio} a las ${hora} reservado con ${nombre}. ¡Gracias! 💅`;

    mostrarHorarios(nombre);
}

function cancelarTurno(nombre, hora) {
    if (!turnosReservados[nombre]) return;

    turnosReservados[nombre] = turnosReservados[nombre].filter(t => t.hora !== hora);

    guardarTurnos();
    document.getElementById("mensaje").innerText = `❌ Turno de las ${hora} cancelado correctamente.`;
    mostrarHorarios(nombre);
}

function guardarTurnos() {
    localStorage.setItem("turnos", JSON.stringify(turnosReservados));
}

function volverInicio() {
    document.querySelector(".profiles").classList.remove("hidden");
    document.getElementById("turnos").classList.add("hidden");
}

