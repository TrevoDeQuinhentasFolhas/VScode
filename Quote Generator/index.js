const frases = [ //frases aleatórias
    "Fortes razões fazem fortes ações.",
    "Só é lutador quem sabe lutar consigo mesmo.",
    "Tudo parece impossível até que seja feito.",
    "Ser feliz sem motivo é a mais autêntica forma de felicidade.",
    "Somos feitos de carne, mas temos de viver como se fôssemos de ferro.",
    "A persistência é o caminho do êxito.",
    "As palavras fazem um efeito na boca e outro nos ouvidos.",
    "Nunca é o fim, sempre é o início de um novo capítulo.",
    "Não importa quanto tempo passe, o seu efeito sobre mim não muda.",
    "O otimismo é a fé em ação. Nada se pode levar a efeito sem otimismo.",
]

const usedIndexes = new Set() // funciona como uma coleção de valores únicos e iteráveis, sendo possível armazenar tipos primitivos ou refereências a objetos
const elementoFrase = document.getElementById("frase") // pega o elemento do id "frase" no html

function GerarFrase() { //função geradora de frases
    if(usedIndexes.size >= frases.length){ // if para reinicar o loop
        usedIndexes.clear()
    }

    while (true){
    const randomIdx = Math.floor(Math.random() * frases.length) //Id random com base no número de frases no array 

    if(usedIndexes.has(randomIdx)) continue // if -> se o usedIndexes possuir um randomIdx continua o loop

    const frase = frases[randomIdx] // constante frase recebe a frase com o index random
    elementoFrase.innerHTML = frase; //innerHTML adiciona o valor recebido no interior da tag em HTML, neste caso <p>
    usedIndexes.add(randomIdx) // adiciona o random index da vez, quando o usedIndexes for maior que o tamanho do array de frases o loop reinicia
    break
    }
}