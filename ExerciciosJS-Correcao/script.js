let numero = prompt()
confirm.length(typeof numero)

numero = parseInt(numero)
console.log(typeof numero)

if(numero > 0)
    console.log("Positivo")

else if (numero == 0)
    console.log("Zero")

else
    console.log("Negativo")


//!Ex 5

let idade = prompt("Insira idade")
idade = parseInt (idade)

switch (idade) {
    case (idade >= 18):
        console.log("kid")
        break
    
    case (idade > 12): 
        console.log("Adolescente")
        break
    
    deafult:
        console.log("Criança")
        
}

//! Ex 6
/*let numero2 = prompt("Insira um numero")
numero = parseInt(numero)

if(numero % 2)
    console.log("Impar")
else
    console.log("Par")*/

//! Ex7
let numero1 = prompt("Insira o primeiro numero")
let numero2 = prompt("Insira o segundo numero")
let operacao = prompt("Insira a operação")

numero1 = parseInt(numero1)
numero2 = parseInt(numero2)

if(operacao == "+")
    alert("Resultado = " + (numero1 + numero2))

else if (operacao == "-")
    alert("Resultado = " + (numero1 - numero2))

else if (operacao == "*" || operacao == "x")
    alert("Resultado = " + (numero1 * numero2))

else if (numero2 == 0)
    alert("Não pode dividir por zero")

else 
    alert("Resultado = " + (numero1 / numero2))


//! Ex intermediario 2
let numeroB = prompt("Insira o segundo numero")
let numeroC = prompt("Insira a operação")

numeroA = parseInt(numeroA)
numeroB = parseInt(numeroB)
numeroC = parseInt(numeroC)

if(numeroA >= numeroB && numeroA >= numeroC)
    console.log("O maior numero é " + numeroA)

else if(numeroB >= numeroC)
    console.log("O maior numero é " + numeroB)

else 
    console.log("O maior numero é " + numeroC)


let valor = prompt("Insira o valor")
valor = parseInt (valor)

if(valor > 100)
    console.log("O desconto será de R$ " + valor * 0.1 + "Totalizado R$" + valor * 0.9)

else    
    console.log("Nenhum desconto disponivel. Total R$" + valor)

    let usuario = prompt("insira o nome do usuário")
    let senha = prompt("digite a senha")

    if(usuario == "admin" && senha == "1234")
        console.log("Login bem-sucedido")

    else
        console.log("Acesso Negado")

    

let ladoA = prompt("Digite Lado A")
let ladoB = prompt("Digite Lado B")
let ladoC = prompt("Digite Lado C")

ladoA = parseInt (ladoA)
ladoB = parseInt (ladoB)
ladoC = parseInt (ladoC)

if(lado + ladoB <= ladoC || ladoA + ladoC <= ladoB || ladoB + ladoC <= ladoA)
    console.log("Não é um triangulo")

else if (ladoA == ladoB && ladoB == ladoC)
    console.log("Triangulo Equilatero")

else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC)
    console.log("triangulo isóceles")

else
    console.log("escaleno")




let nota = prompt("insira a nota")
nota = parseInt(nota)

if(nota > 100 || nota < 0)
    console.log("Digite novamente uma nota válida")

else 
{
    switch (nota)
    {
        case (nota >= 90) :
            console.log("A")
        break

        case (nota >= 80) :
            console.log("B")
        break 

        case (nota >= 70) :
            console.log("C")
        break 

        case (nota >= 60) :
            console.log("D")
        break

        default:
            console.log("F")
    }
}

let altura = prompt("Digite a altura")
let peso = prompt("Digite o peso")

altura = parseFloat(altura)
peso = prompt(peso)

const imc = peso / (altura * altura)

if(imc <18.5)
    console.log("Magreza")

else if(imc <=24.9)
console.log("Normal")

else if(imc <=29.9)
    console.log("Sobrepeso")

else if(imc <=39.9)
console.log("Obesidade")

else
console.log("Obesidade Grave")



let ano = prompt("Digite o ano")

ano = parseInt(ano)

if( ano % 100 && !ano % 4 && !ano % 400)
    console.log("O ano " + ano + " é bissecto")