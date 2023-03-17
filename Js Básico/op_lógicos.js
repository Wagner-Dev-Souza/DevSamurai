// OR - sempre que houver true a expressão se torna true
console.log(false || false) // false
console.log(true || false) // true
console.log(false || true) // true
console.log(true || true) // true

//AND - sempre que houver false, retorna a expressão false
console.log(false && false) // false
console.log(true && false) // false
console.log(false && true) // false
console.log(true && true) // true

//misturando operadores
console.log (false || false || true) // true
console.log(false && false && true) // false
console.log(false || true && true) // true

//AND tem precedencia sobre OR

//NOT ! -  inversão de sinal
console.log(!true) // false
console.log(!false) // true

//resultado de uma expressão (comparação) é boolean
console.log (23 < 24) // true
console.log (23 < 24 && "A" == "A") // true

//variáveis
let a = 10
let b = 20
console.log(a > b) // false