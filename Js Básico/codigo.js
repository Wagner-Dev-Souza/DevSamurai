let nome = "wagner"
let idade = 38
let endereco = {
    rua: "Darcy Ribeiro",
    casa: 6
}

console.log(`${nome} tem ${idade} anos e reside em rua ${endereco.rua}, casa ${endereco.casa}`)

// Objetos
const person = {
    name: "Felipe",
    age: 40,
    address: {
        street: "Av. Central",
        city: "São José dos Campos",
    },
}

person.name = "Pedro"
person.hairColor= "Black"

console.log(person)
console.log(person.name)
console.log(person.age)
console.log(
    `${person.name} tem ${person.age} anos e reside na cidade de
     ${person.address.city}.`
)
// Arrays
// variável + índice
const persons = ["Felipe", "Ana", "Paulo"]

console.log(persons)
console.log(persons[0])
console.log(persons[1])
console.log(persons[2])

persons[0] = "Zé"
persons[3] = "Carlos"

console.log(persons[0])
console.log(persons[3])
console.log(persons)

// Date
/*
 * 1. Date é um tipo específico do JS
 * 2. Possuem métodos próprios para manipulação get e set.
 * 3. São melhores qdo utilizados com bibliotecas(moment.js e 
 * fs-date)
 */

// ''' Como se declara uma variável Date no JS
new Date() // inicializa com a data e a hora atual do computador
//new Date(year, month, day, hours, minutes, seconds, milliseconds)
//inicializa com valores pré-dfinidos.
//new Date(dateString) // inicializa a partir de uma string

const bornDate = new Date()

console.log(bornDate)
