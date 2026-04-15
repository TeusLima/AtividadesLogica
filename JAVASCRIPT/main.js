function mudarTexto() {

    document.getElementById("p1").innerHTML = "Novo texto do paragrafo!";
    document.getElementById("p1").style.color = "blue";
    //document.getElementById("p1").style.fontSize = "50px";
    //document.getElementById("p1").innerHTML = "hoje " + (50+10) 

}

function pedirNome() {

    const nome = prompt("Digite seu nome: ");

    document.getElementById("nomeHTML").innerHTML = nome;
    document.getElementById("nomeHTML").style.color = "red";

}

function pedirIdade() {

    let ano = Number(prompt("Digite seu ano de nascimento: "));
    let idade = 2026 - ano;

    document.getElementById("idade").innerHTML = idade;
    document.getElementById("idade").style.color = "green";

    if (idade >= 18 && idade < 65) {

        document.getElementById("voto").innerHTML = "Voto obrigatório";

    } else if (idade >= 65 || idade >= 16 && idade <= 17) {

        document.getElementById("voto").innerHTML = "Voto Facultativo";

    } else {

        document.getElementById("voto").innerHTML = "Não votante";

    }
}

function mediaEscolar() {

    let notas = []

    for (let i = 0; i < 4; i++) {
        notas[i] = Number(prompt("Dige a nota " + i));

    }

    var media = (notas[0] + notas[1] + notas[2] + notas[3]) / 4

    if (notas[0] == "" || notas[1] == "" || notas[2] == "" || notas[3] == "") {

        document.getElementById("aprovacao").innerHTML = "Não foi possível calcular sua media por falta de nota!"
        document.getElementById("aprovacao").style.color = "blue";

    } else if (media >= 7) {

        document.getElementById("aprovacao").innerHTML = "Sua media é: " + media + " = " + "Aprovado!";
        document.getElementById("aprovacao").style.color = "green";

    } else {

        document.getElementById("aprovacao").innerHTML = "Sua media é de: " + media + " = " + "Reprovado!";
        document.getElementById("aprovacao").style.color = "red";

    }

}


function parImpar() {

    let numero = Number(prompt("Dige um numero: "));

    if (numero % 2 != 0) {

        document.getElementById("numero").innerHTML = "O valor digitado é impar.";

    } else if (numero % 2 == 0) {

        document.getElementById("numero").innerHTML = "O valor digitado é par.";

    } else {

        document.getElementById("numero").innerHTML = "Numero não identificado.";

    }

}

function negativoPositivo() {

    let valor = Number(prompt("Dige um numero: "));
    let a;
    let b;

    if (valor > 0) {

        a = valor
        document.getElementById("valor").innerHTML = "Valor positivo alocado em A: " + a;
        document.getElementById("valor").style.color = "green";
    } else {

        b = valor
        document.getElementById("valor").innerHTML = "Valor negativo alocado em B: " + b;
        document.getElementById("valor").style.color = "red";
    }

}

function verificarNumero() {

    let n = Number(prompt("Dige um numero: "));


    if (n >= 10) {

        document.getElementById("verificar").innerHTML = n;
        document.getElementById("verificar").style.color = "green";

    } else {

        document.getElementById("verificar").innerHTML = 0
        document.getElementById("verificar").style.color = "red";

    }


}

function parImparMostrar() {

    let varInt = Number(prompt("Dige um numero: "));

    let p;
    let i;

    if (isNaN(varInt)) {

        document.getElementById("identificar").innerHTML = "Numero não identificado, gentileza execute novamente.";

    } else if (varInt % 2 != 0) {

        i = varInt
        document.getElementById("identificar").innerHTML = "I = " + i + " P = " + "Vazio IN-DES-CRI-TI-VEL";

    } else if (varInt % 2 == 0) {

        p = varInt
        document.getElementById("identificar").innerHTML = "P = " + p + " I = " + "Vazio IN-DES-CRI-TI-VEL";

    }

}

function escolhaOp() {

    let nivel = prompt("Digite a opção:");
    let desconto = 0;

    switch (nivel) {

        case 'platinum':
            desconto = 5;
            document.getElementById("resultado").innerHTML = desconto + "%"
            break;
        case 'gold':
            desconto = 3;
            document.getElementById("resultado").innerHTML = desconto + "%"
            break;
        case 'silver':
            desconto = 1;
            document.getElementById("resultado").innerHTML = desconto + "%"
            break;
        default:
            desconto = 0;
            document.getElementById("resultado").innerHTML = desconto
            break;



    }

}

function escolherUmNumero() {

    let numeroEscolhido = Number(prompt("Digite um numero entre 1 e 3: "));

    switch (numeroEscolhido) {

        case 1:
            document.getElementById("numeroEscolhido").innerHTML = "Você escolheu o numero: " + numeroEscolhido;
            break;
        case 2:
            document.getElementById("numeroEscolhido").innerHTML = "Você escolheu o numero: " + numeroEscolhido;
            break;
        case 3:
            document.getElementById("numeroEscolhido").innerHTML = "Você escolheu o numero: " + numeroEscolhido;
            break;
        default:
            document.getElementById("numeroEscolhido").innerHTML = "Numero invalido!"
            break;

    }

}

function escolherFruta() {

    let frutaEscolhida = (prompt("Digite a fruta desejada:"));

    switch (frutaEscolhida) {

        case "maça":
            document.getElementById("frutaEscolhida").innerHTML = "O valor da maça é R$ 2,00";
            break;
        case "morango":
            document.getElementById("frutaEscolhida").innerHTML = "O valor da morango é R$ 4,00";
            break;
        case "jaca":
            document.getElementById("frutaEscolhida").innerHTML = "O valor da jaca é R$ 3,00";
            break;
        case "melancia":
            document.getElementById("frutaEscolhida").innerHTML = "O valor da melancia é R$ 5,00";
            break;
        default:
            document.getElementById("frutaEscolhida").innerHTML = "Não temos estoque dessa fruta"
            break;

    }

}

function conceitoMedia() {

    let notas1 = []

    for (let i = 0; i < 4; i++) {
        notas1[i] = Number(prompt("Dige a nota " + i));

    }

    let mediaNova = (notas1[0] + notas1[1] + notas1[2] + notas1[3]) / 4

    switch (true) {

        case (Math.floor(mediaNova) >= 9):
            document.getElementById("conceitoMedia").innerHTML = "Sua media é: " + mediaNova + " e o conceito da media é MB - Muito Bom.";
            break;
        case (Math.floor(mediaNova) >= 6 && mediaNova <= 9):
            document.getElementById("conceitoMedia").innerHTML = "Sua media é: " + mediaNova + " e o conceito da media é B - Bom.";
            break;
        case (Math.floor(mediaNova) >= 3 && mediaNova < 6):
            document.getElementById("conceitoMedia").innerHTML = "Sua media é: " + mediaNova + " e o conceito da media é R - Regular.";
            break;
        case (Math.floor(mediaNova) >= 0 && mediaNova < 3):
            document.getElementById("conceitoMedia").innerHTML = "Sua media é: " + mediaNova + " e o conceito da media é SC - Sem conceito";
            break;
        default:
            document.getElementById("conceitoMedia").innerHTML = "Não conseguimos validar as notas informadas."
            break;

    }

}

function imc() {


    let peso = Number(prompt("Digite seu peso: "));
    let altura = Number(prompt("Digite sua altura: "));
    let imc = peso / altura ** 2;

    if (imc > 18.5 && imc <= 24.9) {

        document.getElementById("informacao").innerHTML = "Seu IMC é de: " + imc.toFixed(2) + " e seu peso está normal."

    } if (imc > 24.9 && imc <= 29.9) {

        document.getElementById("informacao").innerHTML = "Seu IMC é de: " + imc.toFixed(2) + " você está com sobrepeso!"

    } else if (imc > 29.9) {

        document.getElementById("informacao").innerHTML = "Seu IMC é de: " + imc.toFixed(2) + " você está com obesidade!"

    }


}

function compararNumeros() {


    let valor1 = Number(prompt("Digite o primeiro valor: "));
    let valor2 = Number(prompt("Digite o segundo valor: "));

    if (valor1 != valor2 && valor1 > valor2) {

        document.getElementById("numerosDigitados").innerHTML = "O primeiro valor é: " + valor1 + " o segundo valor é: " + valor2 + " e o primeiro valor é maior que o segundo."

    } else if (valor1 != valor2 && valor2 > valor1) {

        document.getElementById("numerosDigitados").innerHTML = "O primeiro valor é: " + valor1 + " o segundo valor é: " + valor2 + " e o segundo valor é maior que o primeiro."

    } else {

        document.getElementById("numerosDigitados").innerHTML = "Os valores digitados são iguais!"

    }
}

function descontoMulher() {


    let nome = prompt("Digite seu nome: ");
    let sexo = prompt("Digite seu sexo: ");
    let compras = Number(prompt("Digite o valor das suas compras: "));
    let desconto = 0;
    let comprasDesconto = 0;

    if (sexo === "feminino" && compras != "" && nome != "") {

        desconto = 0.13;
        comprasDesconto = compras - (compras * desconto)
        document.getElementById("descontoCompras").innerHTML = "Prezada " + nome + " você ganhou um desconto de 13% nas suas compras de hoje. O valor das suas compras sem o desconto é de: R$ " + compras.toFixed(2) + ", total a pagar após o desconto é de: R$ " + Math.round(comprasDesconto);

    } else if (sexo === "masculino" && compras != "" && nome != "") {

        desconto = 0.05;
        comprasDesconto = compras - (compras * desconto)
        document.getElementById("descontoCompras").innerHTML = "Prezado " + nome + " você ganhou um desconto de 5% nas suas compras de hoje. O valor das suas compras sem o desconto é de: R$ " + compras.toFixed(2) + ", total a pagar após o desconto é de: R$ " + Math.round(comprasDesconto);

    } else if (sexo != "masculino" || sexo != "feminino" || compras == "" || nome == "") {

        document.getElementById("descontoCompras").innerHTML = "Preencha todas as informações corretamente para ganhar o desconto!"

    }
}

function multaPorVelocidade() {


    let velocidade = Number(prompt("Digite a velocidade registrada no radar: "));
    let multa = 0

    if (velocidade > 80) {

        multa = (velocidade - 80) * 5
        document.getElementById("valorMulta").innerHTML = "A velocidade registrada no radar foi de: " + velocidade + " Km/h. A multa é de R$ 5,00 por Km/h acima de 80 km/h, sendo assim o valor da multa é de: R$ " + multa.toFixed(2);

    } else if (velocidade == "") {

        document.getElementById("valorMulta").innerHTML = "Gentileza informar a velocidade registrada no radar."

    } else {

        document.getElementById("valorMulta").innerHTML = "Não foi identificada infração."
    }
}


function maiorTresNumeros() {

    let numeros = []

    for (let i = 0; i < 3; i++) {
        numeros[i] = Number(prompt("Dige a nota " + i));

    }

    if (numeros[0] > numeros[1] && numeros[0] > numeros[2]) {

        document.getElementById("numeroMaior").innerHTML = "O numero: " + numeros[0] + " é o maior dentre os 3 digitados."

    } else if (numeros[1] > numeros[0] && numeros[1] > numeros[2]) {

        document.getElementById("numeroMaior").innerHTML = "O numero: " + numeros[1] + " é o maior dentre os 3 digitados."

    } else {

        document.getElementById("numeroMaior").innerHTML = "O numero: " + numeros[2] + " é o maior dentre os 3 digitados."
    }
}

function lanchonete() {

    let codigoItem = Number(prompt("Digite o codigo do item desejado: "));
    let qntdItem = Number(prompt("Digite a quantidade desejada: "));
    let valorItens = 0;
    let i = 0;
    let nomeItem = "";
    let valorUnitario = 0;

    if (codigoItem == 100) {

        nomeItem = "Doguinho";
        valorUnitario = 3.00;
        i = 100;

    } else if (codigoItem == 101) {

        nomeItem = "Dogão";
        valorUnitario = 5.50;
        i = 101;

    } else if (codigoItem == 102) {

        nomeItem = "Pão com Ovo";
        valorUnitario = 3.30;
        i = 102;

    } else if (codigoItem == 103) {

        nomeItem = "Hamburguer";
        valorUnitario = 5.60;
        i = 103;

    } else if (codigoItem == 104) {

        nomeItem = "Refrigerante";
        valorUnitario = 4.50;
        i = 104;

    } else {

        document.getElementById("totalPagar").innerHTML = "Escolha um item valido!";

    }


    let teste = document.getElementById("especificacoes").textContent; // Trazendo o valor do id do Td de index 
    console.log(teste);

    let teste2 = document.getElementById("teste2").value; // Trazendo o valor do id input do index 
    console.log(teste2);


    while (i >= 100 && i <= 104) {

        if (codigoItem == i) {

            valorItens = qntdItem * valorUnitario
            document.getElementById("totalPagar").innerHTML = "O item escolhido foi o " + nomeItem + ", a quantidade foi " + qntdItem + ". O valor total a pagar é de: R$ " + valorItens.toFixed(2);

        };

        i++;


    }
}

function testeMostrandoNumeros() {

    let N = Number(prompt("Digite um numero maior que 0: "))
    let i10 = 1
    let conct = ""

    while (i10 > 0 && i10 <= N) {

        conct = conct + " " + i10;
        i10++;

    }

    document.getElementById("testeMostrar").innerHTML = conct;

}

function tabuada() {

    let numeroTabuada = Number(prompt("Digite um numero maior que 0: "));
    let index = 1;
    let tabuada = 0;
    let conct1 = "";

    while (index >= 1 && index <= 10) {

        tabuada = numeroTabuada * index;
        conct1 = conct1 + " " + numeroTabuada + " x " + index + " = " + tabuada + " / " ;
        
        index++

    }

    document.getElementById("testeTabuada").innerHTML = "A tabuada de: " + numeroTabuada + " é: " + conct1;

}

function lerIdades() {

    let nome = [];
    let idade = [];
    let deMaior = "";
    let deMenor = "";

    for (let index = 0; index <=4 ; index++) {
        
        nome = prompt("Digite o nome da pessoa " + index + ":")
        idade = Number(prompt("Digite a idade " + index + ":"))

        if (idade >= 18) {
            
            deMaior += nome + " ";
            
        }else if (idade <= 18) {
            
            deMenor += nome + " ";
            
        }
        
    }
    
    document.getElementById("deMaior").innerHTML ="As pessoas com idade maior que 18 são: " + deMaior;
    document.getElementById("deMaior").style.color = "green";
    document.getElementById("deMenor").innerHTML ="As pessoas com idade menor que 18 são: " + deMenor;
    document.getElementById("deMenor").style.color = "red";
}

function imprimirParImpar() {

    let N = Number(prompt("Digite um numero acima de 1: "));
    let impares = "";
    let pares = "";

    for (let index = 0; index <= N; index++) {
        
        if (index % 2 == 0) {
            
            pares += index + " "; 

        }else{

            impares += index + " ";

        }
        
    }

    document.getElementById("testePares").innerHTML = pares;
    document.getElementById("testeImpares").innerHTML = impares;
     
}

function calcularDesconto(preco, percentual) {

    return preco * (percentual / 100);
    
}

// const preco = 200;
// const percentual = 10;
// const desconto = calcularDesconto(preco, percentual);
// const total = preco - desconto;

// console.log("Preço: ", preco);
// console.log("Desconto: ", desconto);
// console.log("Total a pagar: ", total);

function jankenpon() {

    let player01 = prompt("Player 01 - Escolha entre Pedra, Papel e Tesoura: ");
    let player02 = prompt("Player 02 - Escolha entre Pedra, Papel e Tesoura: ");


    if (player01 == 1 || player01 == "Pedra" && player02 == 2 || player02 == "Papel" ) {

        document.getElementById("jankenpon").innerHTML = "Papel embrulha a pedra. O vencedor foi: O Player 2."

    }else if (player01 == 2 || player01 == "Papel" && player02 == 1 || player02 == "Pedra" ) {

        document.getElementById("jankenpon").innerHTML = "Papel embrulha a pedra. O vencedor foi: O Player 1."
        
    }else if (player01 == 2 || player01 == "Papel" && player02 == 3 || player02 == "Tesoura") {

        document.getElementById("jankenpon").innerHTML = "Tesoura corta papel. O vencedor foi: O Player 2."
        
    }else if (player01 == 3 || player01 == "Tesoura" && player02 == 2 || player02 == "Papel") {

        document.getElementById("jankenpon").innerHTML = "Tesoura corta papel. O vencedor foi: O Player 1."
        
    }else if (player01 == 3 || player01 == "Tesoura" && player02 == 1 || player02 == "Pedra") {

        document.getElementById("jankenpon").innerHTML = "Pedra quebra tesoura. O vencedor foi: O Player 2."
        
    }else if (player01 == 1 || player01 == "Pedra" && player02 == 3 || player02 == "Tesoura") {

        document.getElementById("jankenpon").innerHTML = "Pedra quebra tesoura. O vencedor foi: O Player 1."
        
    }else if(player01 == player02){

        document.getElementById("jankenpon").innerHTML = "Deu empate."

    }else{

        document.getElementById("jankenpon").innerHTML = "Não foi possível chegar a um resultado, gentileza joguem novamente."
    }

    
}

//const lista = [10,20]

//lista.push(30);

//const fim = lista.pop();

//lista.unshift(5); //Insere no inicio.

//const ini = lista.shift(5); //Remove no inicio.

//const pos = lista.indexOf(20); //Retorna se existe ou não o valor 20 no array. Se achar retorna 1 se não achar retorna -1.

//const contem = lista.includes(10); // Retorna se existe ou não o valor (true / false)

// for (let index = 0; index < lista.length; index++) {
    
//     console.log(lista[index]);
    
// }

// const array = [1,2,3,4]
// const modificarArray = array.map((element) => element * 3);

// //console.log(modificarArray);

// array.push(modificarArray)

// console.log(array);






