//ENQUANTO
// enquanto a condição for verdadeira, execute
let contador = 1
while (contador <= 10) {
    console.log(`executando ${contador}`)
    contador++
}
console.log("Fim do programa")

//FOR

for (let i = 0; i < 3; i++) {
    console.log(i)
}
const nomes = ["Felipe", "Maria", "Paulo"]

for (let i = 0; i < nomes.length; i ++) {
    console.log(nomes[i])
}

//FOR OF (usado para arrays)

for (const nome of nomes) {
    console.log(nome)
}

//FOR IN (usado para objetos)

const person = {
    name: "Felipe",
    age: 40,
    city: "São José dos Campos"
}

for (const prop in person) {
    console.log(`Prop: ${prop}`)
    console.log(`Prop: ${prop} - ${person[prop]}`)
}
//para acessar os valores da propriedade
//objeto.propriedade // Dot notation
//objeto["propriedade"] // notação por colchete



console.log("Fim do programa")

