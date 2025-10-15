const btnAdd = document.querySelector(".btnAdd")
const tarea = document.querySelector(".tarea");
const lista=document.querySelector(".lista")

const textoGuardado = localStorage.getItem("texto");
if(textoGuardado!=""){
    saludo.textContent=`Guardado: ${textoGuardado}`;

}
const textoGuardadoa = localStorage.getItem("apellido");
if(textoGuardadoa!=""){
    saludo.textContent=`Guardado: ${textoGuardadoa}`;

}
const textoGuardadoa1 = localStorage.getItem("apellido2");
if(textoGuardadoa1!=""){
    saludo.textContent=`Guardado: ${textoGuardadoa1}`;

}
const textoGuardadof = localStorage.getItem("date");
if(textoGuardadof!=""){
    saludo.textContent=`Guardado: ${textoGuardadof}`;

}

btnAdd.addEventListener("click",()=>{
    const tareas= tarea.value;
    if(tareas!=""){
        localStorage.setItem(`texto`,texto);
        saludo.textContent = `Guardado: ${texto} ${apellido} ${apellido2} ${date}`;
    }
} 
);