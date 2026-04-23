console.log("Questão 1:");
console.log();

let int1 = 10;
let int2 = 20;
let soma;

soma = int1 + int2

console.log("A soma dos valores é igual á : " + soma);
console.log();

//---------------------------------------------------------------

console.log("Questão 2:");
console.log();

let int3 = 10;
let dec1 = 5.5;

console.log("O valor inteiro é: " + int3 + " e o valor decimal é: " + dec1);
console.log();

//--------------------------------------------------------------

console.log("Questão 3:");
console.log();

let texto1 = "a";

console.log("Resposta: "+ texto1);
console.log();

//--------------------------------------------------------------

console.log("Questão 4:");
console.log();

const pi = 3.14159;
let area, raio =5;

area = pi * raio * raio;

console.log("A area do circulo é de: " + area);
console.log();

//---------------------------------------------------------------

console.log("Questão 5:");
console.log();

let int4 = 9, int5 = 3;
let somar, subtrair, multiplicar, dividir;

somar = int4 + int5;
subtrair = int4 - int5;
multiplicar = int4 * int5;
dividir = int4 / int5;

console.log("A soma dos valores é: "+ somar + ", a subtração é: " +subtrair + ", a multiplicação é: " + multiplicar + ", a divisão é: " + dividir);
console.log();

//---------------------------------------------------------------

console.log("Questão 6:");
console.log();

let nome = "Mateus";
let sobrenome = "Lima";
let nomeCompleto = nome + " " + sobrenome

console.log("Nome completo: " + nomeCompleto);

//-----------------------------------------------------------------

console.log("Questão 7:");
console.log();

let nota1 = 10, nota2 = 5, nota3 = 7;

let media = (nota1+nota2+nota3)/3;

console.log("A media é: " + media);
console.log();

//-----------------------------------------------------------------

console.log("Questão 8:");
console.log();

let celsius, fahrenheit = 100;

celsius = (fahrenheit - 32) * 5/9;

console.log(fahrenheit + "º  graus fahrenheit é: " + Math.round(celsius) + "º graus celsius.");
console.log();

//--------------------------------------------------------------------

console.log("Questão 9:");
console.log();

let valor1 = 10;
let valor2 = 11;

valor1++;
valor2--;

console.log("Resultado: " + valor1);
console.log("Resultado: " + valor2);
console.log();

//---------------------------------------------------------------------

console.log("Questão 10:");
console.log();

let div1 = 12;
let div2 = 5;
let resto;

resto = div1 % div2;

console.log("Resultado: "+ resto);
console.log();

//----------------------------------------------------------------------

console.log("Questão 11:");
console.log();

let div3 = 10.5;
let div4 = 4.5;
let valorDiv = div3 / div4

console.log("Resultado: "+ valorDiv);
console.log();

//-----------------------------------------------------------------------

console.log("Questão 12:");
console.log();

let num1 = 10;
let num2 = 7; 
let bool = num1 == num2;

console.log("Resultado: " + bool);
console.log();

//-----------------------------------------------------------------------

console.log("Questão 13:");
console.log();

let num3 = 10;
let divPorZero = num3 / 0;

console.log("Resultado: " + divPorZero); //O resultado da como infinito. 
console.log();


//-----------------------------------------------------------------------

console.log("Questão 14:");
console.log();

const numDias = 7;
const calculoSemana = 365/numDias;

console.log("Resultado: " + Math.round(calculoSemana));
console.log();


//-----------------------------------------------------------------------

console.log("Questão 15:");
console.log();

let peso = 103;
let altura = 1.78;
let imc = peso / altura**2;
let informacao;

if (imc > 18.5 && imc <= 24.9 ) {

    informacao = "seu peso está normal."
    
}if (imc > 24.9 && imc <= 29.9 ) {

    informacao = "você está com sobrepeso!"
    
} else if (imc > 29.9) {

    informacao = "você está com obesidade!"
    
}

console.log("Seu Indice de Masssa Corporal é: " + Math.round(imc) + " e " + informacao);






 















