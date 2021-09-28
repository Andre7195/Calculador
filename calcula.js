
const ejecutarBoton =()=>{
    const boton = event.target
    console.log(boton.innerText)
    const input = document.getElementById("input")
    input.value= boton.innerText
}
const main = ()=>{
    console.log("hola")
    const boton1 = document.getElementById("1")
    const boton2 = document.getElementById("2")
    const boton3 = document.getElementById("3")
    const boton4 = document.getElementById("4")
    const boton5 = document.getElementById("5")
    const boton6 = document.getElementById("6")
    const boton7 = document.getElementById("7")
    const boton8 = document.getElementById("8")
    const boton9 = document.getElementById("9")
    const boton0 = document.getElementById("0")
    boton1.addEventListener("click", ejecutarBoton);
    boton2.addEventListener("click", ejecutarBoton);
    boton3.addEventListener("click", ejecutarBoton);
    boton4.addEventListener("click", ejecutarBoton);
    boton5.addEventListener("click", ejecutarBoton);
    boton6.addEventListener("click", ejecutarBoton);
    boton7.addEventListener("click", ejecutarBoton);
    boton8.addEventListener("click", ejecutarBoton);
    boton9.addEventListener("click", ejecutarBoton);
    boton0.addEventListener("click", ejecutarBoton);

}

window.addEventListener("load", main);