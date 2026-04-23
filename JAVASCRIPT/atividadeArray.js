let array = [1,2,3,4,5,6]

let arrayInverso = []

for (let index = 6; index >= array.length; index--) {
    
    arrayInverso = array.pop(index)
    console.log(arrayInverso);
     
}

console.log();

let pessoas = ["pessoa1", "pessoa2", "pessoa3", "pessoa4", "pessoa5"]

let idades = [16, 18, 26, 10, 5]

let maiorIdade = []


for (let index = 0; index < 5; index++) {
    
    if (idades[index] >= 18) {
        
        maiorIdade += pessoas[index] + " = " + idades[index] + " ";

    }
    
    
}

console.log(maiorIdade);


console.log();


let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

let par = []

let impar = []

for (let index = 0; index < numeros.length; index++) {
    
    if (numeros[index] % 2 == 0) {

        par += numeros[index] + " ";
        
    }else{

        impar += numeros[index] + " ";
    }
}

console.log(numeros);
console.log();


console.log("Os numeros pares são: "+ par);

console.log("Os numeros impares são: " + impar);

let teste = [{nome: "Mateus", idade: 26},{nome: "William", idade: 22}]

console.log(teste[0].idade);




