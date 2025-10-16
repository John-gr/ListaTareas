const inputTarea = document.querySelector(".tarea");
const btnAdd = document.querySelector(".btnAdd");
const listaContenedor = document.querySelector(".lista");

function obtenerTareasGuardadas() {
    const textoGuardado = localStorage.getItem("tareas") || "";
    return textoGuardado ? textoGuardado.split('|') : [];
}

function guardarTareas(tareasArray) {
    const textoParaGuardar = tareasArray.join('|');
    localStorage.setItem("tareas", textoParaGuardar);
}

function renderizarTareas() {
    const tareas = obtenerTareasGuardadas();
    listaContenedor.innerHTML = ""; 

    if (tareas.length === 0) {
        listaContenedor.innerHTML = "<p>No hay tareas pendientes. ¡Añade una!</p>";
        return;
    }

    tareas.forEach((tareaCompleta, index) => {
        const [textoTarea, estado] = tareaCompleta.split(':');
        
        const estaCompletada = estado === 'completada';
        const checkedAttribute = estaCompletada ? 'checked' : '';
        const claseCompletada = estaCompletada ? 'tarea-completada' : '';
        const itemHTML = `
            <div class="tarea-item ${claseCompletada}">
                <input type="checkbox" id="cb-${index}" data-index="${index}" ${checkedAttribute}> 
                <label for="cb-${index}">${textoTarea}</label>
            </div>
        `;
        listaContenedor.innerHTML += itemHTML;
    });
    agregarListenersCheckboxes();
}
function agregarListenersCheckboxes() {
    document.querySelectorAll('.tarea-item input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const index = e.target.dataset.index;
            const tareas = obtenerTareasGuardadas();
            let [textoTarea, estadoActual] = tareas[index].split(':');
            const nuevoEstado = e.target.checked ? 'completada' : 'pendiente';
            tareas[index] = `${textoTarea}:${nuevoEstado}`;
            guardarTareas(tareas);
            renderizarTareas(); 
        });
    });
}

btnAdd.addEventListener("click", () => {
    const nuevaTareaTexto = inputTarea.value.trim();

    if (nuevaTareaTexto !== "") {
        const nuevaTareaCompleta = `${nuevaTareaTexto}:pendiente`; 
        const tareas = obtenerTareasGuardadas();
        tareas.push(nuevaTareaCompleta);
        guardarTareas(tareas);
        renderizarTareas();
        inputTarea.value = "";
    }
});
document.addEventListener("DOMContentLoaded", renderizarTareas);