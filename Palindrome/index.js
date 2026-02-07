const input = document.getElementById("input")

function StringAoContrario(str) {
    return str.split("").reverse().join("")
}

function verificar() {
    const value = input.value
    const reverse = StringAoContrario(value)

    if(value == reverse){
        alert("É um palíndromo!")
    }else{
        alert("Não é um palíndromo")
    }
}