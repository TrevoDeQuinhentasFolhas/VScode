let segundosDecorridos = 0;
let intervalo = null;
const time = document.getElementById("time")

function padStart(value){
    return String(value).padStart(2, "0")
}

function setTime(){
    const minutos = Math.floor(segundosDecorridos / 60)
    const segundos = segundosDecorridos % 60
    time.innerHTML = `${padStart(minutos)}:${padStart(segundos)}`;
}

function timer() {
    segundosDecorridos++;
    setTime()
}

function startClock(){
    if(intervalo) stopClock()
    intervalo = setInterval(timer,1000)
}

function stopClock(){
    clearInterval(intervalo)
}

function resetClock(){
    stopClock()
    segundosDecorridos = 0;
    setTime()
}