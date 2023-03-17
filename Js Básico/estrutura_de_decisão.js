//SE
console.log("Inicio do programa")

if (true) {
    console.log("Desvio de fluxo")
}

console.log("Fim do programa")

//SENÃO

if (false) {
    console.log("verdadeiro")
} else {
    console.log("falso")
}

//SENÃO SE

const valor = 2

if (valor <= 1) {
    console.log("condição 1")
} else if (valor > 1 && valor <= 2) {
    console.log("condição 2")
} else if (valor > 2 && valor <= 3) {
    console.log("condição 3")
} else {
    console.log("condição outra")
}

//Ternário
let texto = "A"
let variavel

variavel = texto == "A" ? 10 : 20;
console.log("variavel = ", variavel)

//SWITCH

let numero = 5

switch (numero) {
    case 1:
        console.log("condição 1")
        break
    case 2:
        console.log("condição 2")
        break
    case 3:
        console.log("condição 3")
        break
    default:
        console.log("condição default")
        break
}

//TRY CATCH

try {
    //executa algo...
    //consulta de API, Banco de Dados, arquivos...
    console.log("Consultando o banco de dados...")
    //con.select("clientes") // ponto de falha
    throw "Erro 1032 ao conectar como banco de dados."
    //throw é o disparador do erro para o catch

} catch (error) {
    //erro
    alert("Erro de execução genérico. Por favor, fale com o suporte")
    console.error.apply(error)

} finally {
    //sempre executa no final (opicional)
    console.log("execução final")
}