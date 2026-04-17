function contagem1() {

    let numeroFinal = 11;
    let contagem = [];

    for (let index = 6; index <= numeroFinal; index++) {

        contagem += index + " ";

    }

    document.getElementById("contagem1").innerHTML = contagem + "Acabou!";


}

function contagem2() {

    let numeroFinal = 3;
    let contagem = [];

    for (let index = 10; index >= numeroFinal; index--) {

        contagem += index + " ";

    }

    document.getElementById("contagem2").innerHTML = contagem + "Acabou!";


}

function contagem3() {

    let numeroFinal = 18;
    let contagem = [];

    for (let index = 0; index <= numeroFinal; index += 3) {

        contagem += index + " ";

    }


    document.getElementById("contagem3").innerHTML = contagem + "Acabou!";

}

function contagem4() {

    let numeroFinal = 0;
    let contagem = [];

    for (let index = 100; index >= numeroFinal; index -= 5) {

        contagem += index + " ";

    }

    document.getElementById("contagem4").innerHTML = contagem + "Acabou!";


}

function contagem5() {

    let numeroInicial = Number(prompt("Digite o primeiro numero: "));
    let numeroFinal = Number(prompt("Digite o numero final: "));
    let contagem = [];

    for (let index = numeroInicial; index < numeroFinal; index += 7) {

        contagem += index + " "

    }

    document.getElementById("contagem5").innerHTML = contagem + "Acabou!"

}

function somaImpares() {

    let numeroFinal = 500;
    let somaImpares = 0

    for (let index = 0; index < numeroFinal; index++) {

        if (index % 2 != 0) {

            index = index;
            somaImpares += index;

        }

    }

    document.getElementById("somaImpares").innerHTML = somaImpares


}

function sorteioNumeros() {

    let sorteados = [];
    let acima5 = [];
    let divisiveis3 = [];

    for (let index = 0; index < 20; index++) {

        let numero = Math.floor(Math.random() * 10);

        sorteados.push(numero)

        if (numero > 5) {

            acima5.push(numero)

        } if (numero % 3 == 0 && numero != 0) {

            divisiveis3.push(numero)

        }

    }

    document.getElementById("sorteioNumeros").innerHTML = sorteados;
    document.getElementById("acimaDe5").innerHTML = acima5;
    document.getElementById("divisiveisPor3").innerHTML = divisiveis3;
}

function produtos() {

    let produtos = ["produto1", "produto2", "produto3", "produto4", "produto5", "produto6", "produto7", "produto8"]

    let precos = [16, 18, 26, 10, 5, 6, 12, 8]

    let maiorPreco = "";

    let menorPreco = "";

    for (let index = 0; index < 8; index++) {

        if (precos[index] > 10) {

            maiorPreco += produtos[index] + " = " + precos[index] + " ";

        }else if (precos[index] <= 10) {

            menorPreco += produtos[index] + " = " + precos[index] + " ";
            
        }
    }

    document.getElementById("maiorPreco").innerHTML = "Os produtos com maiores preços são: " + maiorPreco;
    document.getElementById("menorPreco").innerHTML = "Os produtos com menores preços são: " + menorPreco;

}

function idadePessoas() {

    let pessoas = []

    for (let index = 0; index < 10; index++) {
        
        let novaPessoa = {nome: `${prompt("Digite seu nome: ")}`, idade: `${Number(prompt("Digite sua idade: "))}`};

        pessoas.push(novaPessoa);


    }

    console.log(pessoas[0]);
    console.log(pessoas[1]);

    


    
}