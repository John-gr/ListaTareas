const btnAdd = document.querySelector(".btnAdd")
const tarea = document.querySelector(".tarea");
const lista=document.querySelector(".lista")

const textoGuardado = localStorage.getItem("tareas");
if(textoGuardado!=""){
    lista.textContent=`Tareas: ${textoGuardado}`;
}

btnAdd.addEventListener("click",()=>{
    const tareas= tarea.value;
    if(tareas!=""){
        const ver = localStorage.getItem("tareas");
        if(ver!=""){
            lista.innerHTML="<br>"
        }
        localStorage.setItem(`tareas`,tareas);
        lista.textContent = `Tareas: ${tareas}`;
        lista.innerHTML="<input type="checkbox" value="HTML" id="cb">"

    }
} 
);