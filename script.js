//! Exercicio 1
//*  Verificaar maioridade
//* Usuario insere valor
//* logica com if else
//* 
//*Usuario digita idade (input, numeor int)
//* O que é variavel aqui? idade
//*Logica idade: Idade >= 18?
//*Se idade >= 18 faça
//*  Escreve a
//*senao faça
//*  Escreve b

/*let idade = prompt("Digite a idade: ")

if (idade >= 18) {
    console.log("Maior de idade")
    alert("Maior de idade")
} else if (idade < 18) {
    console.log("Menor de idade")
    alert("Menor de idade")
} else {
    console.log("Invalido")
    alert("Invalido")
}*/

//! Exercicio 2
//* Verificar se é positivo ou negativo
//* Se é maior 0 é positivo, se menor ou igual, não é
//* Usuario insere valor, logica com if else
//* 
//*Usuario digita numero
//*O que é variavel aqui? Numero digitado
//*Logica: Numero é <= ou > que zero?
//*Se num > 0 faça
//* Escreva positivo
//*Se <= 0 faça
//* Escreva negativo
//?? Numero isolado
/*let num = prompt("Digite um numero interiro (Z)")

if (num <= 0) {
    console.log("Negativo")
    alert("Negativo")
} else if(num > 0) {
    console.log("Positivo")
    alert("Positivo")
}*/

//?? Opercações
/*let num1 = prompt("Digite um numero")
let num2 = prompt("Digite segundo numero")
let resultado = num1 - num2
if (resultado > 0) {
    console.log(num1 + " - " + num2 + " é " + resultado + ". É Positivo")
    alert(num1 + " - " + num2 + " é " + resultado + ". É Positivo")
} else if (resultado <= 0) {
    console.log("É Negativo")
    alert("É Negativo")
}*/

//! Exercicio 3
//* Aprovação de aluno
//* Nota vai de 0 até 100 (for ou condição?)
//* Nota >= 60, aprovado, senao reprovado

/*let nota = prompt("Digite nota do aluno: ")

if (nota > 100) {
    console.log("Invalido")
    alert("Invalido")
} else if (nota >= 60) {
    console.log("Aprovado")
    alert("Aprovado")
} else {
    console.log("Reprovado")
    alert("Reprovado")
}*/

//! Exercicio 4
//* Verificar se é positivo ou negativo
//* Se é maior 0 é positivo, se menor, não é
//* Se zero, informar
//* Usuario insere valor, logica com if else
//* 
//*Usuario digita numero
//*O que é variavel aqui? -> Numero digitado
//*Logica: Numero é <, >, ou igual a zero?
//*Se num > 0 faça
//* Escreva positivo
//*Se <= 0 faça
//* Escreva negativo
//?? Numero isolado
/*let num = prompt("Digite um numero interiro (Z)")

if (num < 0) {
    console.log("Negativo")
    alert("Negativo")
} else if(num > 0) {
    console.log("Positivo")
    alert("Positivo")
} else if(num = 0) {
    console.log("O resultado é zero")
    alert("O resultado é zero")
}*/

//?? Opercações
/*let num1 = prompt("Digite um numero")
let num2 = prompt("Digite segundo numero")
let resultado = num1 - num2
if (resultado > 0) {
    console.log(num1 + " - " + num2 + " é " + resultado + ". É Positivo")
    alert(num1 + " - " + num2 + " é " + resultado + ". É Positivo")
} else if (resultado < 0) {
    console.log("É Negativo")
    alert("É Negativo")
}  else if(num = 0) {
    console.log("O resultado é zero")
    alert("O resultado é zero")
}*/

//! Exercicio 5
//* Usuario digita idade
//* Logica: condições
//* SE idade > 0 E idade < 12
//*     Escreve: Crianca
//* Se > 14 E < 17
//*     Adolescente
//* >= 18
//*     Adulto
//* Se nenhum --> Invalido

/*let idade = prompt("Digite a idade: ")

if (idade > 0 && idade < 12) {
    alert("Criança")
    console.log("Criança")
} else if (idade > 14 && idade < 17) {
    alert("Adolescente")
    console.log("Adolescente")
} else if (idade > 18) {
    alert("Adulto")
    console.log("Adulto")
} else {
    alert("Idade invalida")
    console.log("Idade invalida")
}*/

//! Exercicio 6
/*let num = prompt("Digite um numero")

if (num % 2 == 1) {
    alert("Impar")
    console.log()
} else if (num % 2 == 0) {
    alert("Par")
    console.log()
}*/

//!########## INTERMEDIARIO ####################
//! Exercicio 1
//* Calculadora

let num1 = prompt("Digite o primeiro numero")
let num2 = prompt("Digite o segundo numero")
let operacao = prompt("Digite a operação")
let resultado = 0

switch (operacao) {
    case "+": 
    resultado = num1 + num2
    alert(resultado);
}