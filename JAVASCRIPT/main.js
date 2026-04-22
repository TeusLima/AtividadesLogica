var usuario = "";
var senha = "";

function validacao() {

    let user =  document.getElementById("user").value;
    let passwd = document.getElementById("passwd").value;

    if (user != "" && passwd != "") {

        usuario = user;
        senha = passwd;

        window.location.href = "tarefas.html"

    }else if(user == "" || passwd == ""){

        alert("Dados de acesso incorreto.")

    }

}

var saldo = 0;

function Deposito() {

    let deposito = Number(document.getElementById("deposito").value);


    if (deposito > 0) {

        saldo = saldo + deposito;
        
    }else{

        alert("O valor digitado para deposito é incorreto. Gentileza refaça o procedimento!");

    }
      
}

function Saque() {

    let saque = Number(document.getElementById("saque").value)

    
    if(saque > 0 && saldo < saque){

        alert("Saldo insuficiente!")

    }else if (saque > 0) {

        saldo = saldo - saque
        
    }else {

        alert("O valor digitado para saque é incorreto. Gentileza refaça o procedimento!");

    }
    
}

function Saldo() {

    document.getElementById("saldo").innerHTML = "Seu saldo é de: R$ " + saldo.toFixed(2);
    
}







