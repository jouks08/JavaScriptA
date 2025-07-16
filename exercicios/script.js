function somar() {

    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    // console.log("Resultado" + (n1 + n2));

    document.getElementById("resultado1").innerText = "Resultado: " + (n1 + n2);

}

function verificarIdade(){
    let idade =Number(document.getElementById("idade").value)

    if(idade >= 18){
        
        document.getElementById("verificacao").innerText = "Maior de idade";


    }

    else{
        document.getElementById("verificacao").innerText = "Menor de idade";
    }

}

function contarCaracteres(){
    let texto1 = document.getElementById("caracteres").value;
    let textoTamanho = texto1.length;
    document.getElementById("resultadoCaracteres").innerText = "resultadoCaracteres" + (textoTamanho);

}

function verificarParImpar(){

    let num3 = Number(document.getElementById("num3").value);
    let resultadoParImpar;

    if(num3 % 2 == 0){
       
        document.getElementById("resultadoParImpar").innerText = "Seu número é par";

    }

    else{
        
        document.getElementById("resultadoParImpar").innerText = "Seu número é ímpar";
    }

}

function converterMaiuscula(){

    let texto2 = document.getElementById("nome").value;

    document.getElementById("resultadoLetrasMaiusculas").innerText = (texto2).toUpperCase();


}

function verificarMaior(){

    let num4 = document.getElementById("num4").value;
    let num5 = document.getElementById("num5").value;

    if(num4 > num5){

        document.getElementById("resultadoMaior").innerText = (num4) + " é maior";

    }

    else if(num5 > num4){

        document.getElementById("resultadoMaior").innerText = (num5) + " é maior"

    }

    else{
        document.getElementById("resultadoMaior").innerText = "Os números são iguais"
    }
}

function imprimirTabuada(){

    let numTabuada = Number(document.getElementById("numTabuada").value);
    let tabuada = "";

    for(let i =1;i <= 10; i++){

        tabuada += numTabuada + " x " + i + " = " + (numTabuada * i) + "\n";

    }

    document.getElementById("resultadoTabuada").innerText = tabuada;

}

function imprimirContagem(){

    let contagem = "";

    for(let i =1;i <= 10; i++){

        contagem += i + "\n";

    }

    document.getElementById("contagem").innerText = contagem;



}

function verificarAprovacao(){

    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);

    let media = (nota1 + nota2 + nota3) / 3;

    if(media >= 6){

        document.getElementById("aprovacao").innerText = "Aprovado com média: " + media.toFixed(2);

    }

    else {
        document.getElementById("aprovacao").innerText = "Reprovado com média: " + media.toFixed(2);

    }

}


